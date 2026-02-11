 import express from "express";
 import mongoose from 'mongoose';
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from './auth/authentication.js';
import  {verifyToken}  from "./middleware/middleware.js";
import Chat from "./schemas/chat_schema.js";


dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/auth",authRoutes);

 
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

app.get("/test", (req, res) => {
  res.send("hello");
});

app.post("/api/chat",verifyToken, async (req, res) => {
  try {
    const userMessage = req.body.message;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: [{ role: "user", parts: [{ text: userMessage }] }],
    });

    const output = result.candidates[0].content.parts[0].text;

    // Save to DB
    const chat = new Chat({
  userId: req.user.id,
  title: userMessage.slice(0, 20),
  messages: [
    { sender: "user", text: userMessage },
    { sender: "bot", text: output }
  ]
});

    await chat.save();

    res.json({ reply: output ,chat});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});


app.get("/api/history", verifyToken, async (req, res) => {
  const chats = await Chat.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(chats);
});


app.delete("/api/history/:id", verifyToken, async (req, res) => {
  await Chat.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ message: "Deleted" });
});

app.delete("/api/history", verifyToken, async (req, res) => {
  await Chat.deleteMany({ userId: req.user.id });
  res.json({ message: "All cleared" });
});

async function  startConnection(){
    try{
      await  mongoose.connect(process.env.MONGODB);
        console.log("connect Successfully Database");
    }
    catch(err){
      console.log("error ",err);
    }
 }
 startConnection();


app.listen(port, () => {
  console.log("connected successfully");
});