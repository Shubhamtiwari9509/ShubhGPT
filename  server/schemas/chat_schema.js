import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // 👈 add this
  title: String,
  messages: [{ sender: String, text: String }],
}, { timestamps: true });

const Chat = mongoose.model("Chat", ChatSchema);
export default Chat ;