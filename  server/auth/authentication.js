import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import User from "../schemas/user_schema.js";
import dotenv from 'dotenv';
  
const router=express.Router();

router.get("/signup",(req,res)=>{
   res.redirect(`${process.env.CLIENT_URL}/signup`);
});
 
router.post("/signup",async(req,res)=>{
    console.log("a")
    const {userName,email,password}=req.body;
    try{
        const searchUser= await User.findOne({email});
        if(searchUser){
            return res.status(400).json({message:"User alraedy exists"});
        }
        console.log("b")
        const hashpassword= await bcrypt.hash(password, 10);
        const newUser= new User({
            userName:userName,
            email:email,
            password:hashpassword
        });
        const token = jwt.sign(
  { id: newUser._id, email: newUser.email },  
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

        newUser.token=token;
        await newUser.save();
        return res.status(201).json({message:"Successfully Signup Complete",token ,user:{userName,email}});
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"Something went wrong"});
         
    }
});

router.get("/login",(req,res)=>{
    res.redirect(`${process.env.CLIENT_URL}/login`);
});

 

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const searchUser = await User.findOne({ email });
    if (!searchUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, searchUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Wrong email or password" });
    }

    const userName = searchUser.userName;
    const token = jwt.sign(
      { id: searchUser._id, email: searchUser.email, userName },  
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      message: "Welcome back",
      token,
      user: { userName, email }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
});


export default router;