// pages/api/news/index.ts
import { connectToDB } from "@/lib/connect";

import { NextResponse } from "next/server";
import News from "../model/news.model";
import User from "../model/user.model";
import bcrypt from "bcryptjs";
import axios from "axios";
// Handler to create a new news article
export const POST = async (req: any) => {
  try {
    const { userId } = await req.json();
    await connectToDB();
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" });
    }
    // const hashedPassword = await bcrypt.hash(newPassword, 10);
      // user.password = hashedPassword;
      
       const url = "https://www.johnkpikpi.com/";
       let message;

       if (creator) {
         message = `Hello ${name},\n\nYour account has been created by ${creatorDetails.name}. Your credentials are as follows:\n\nEmail: ${email}\nPassword: ${password}\n\nPlease change your password after your first login\n ${url}.\n\nRegards,\nTeam`;
       } else {
         message = `Hello ${name},\n\nYour account has been successfully created.Thank you for joining our mission\n\nRegards,\nTeam`;
       }

       // Send SMS using mNotify
       const apiKey = "qGMGejprSNybRF6uFewGQ3Ex7";
       const senderId = "JK2024";

       const mNotifyUrl = `https://apps.mnotify.net/smsapi?key=${apiKey}&to=${contactNumber}&msg=${encodeURIComponent(
         message
       )}&sender_id=${senderId}`;

       try {
         const response = await axios.post(mNotifyUrl);
         if (response.data.status === "1000") {
           console.log("SMS sent successfully");
         } else {
           console.log(`Failed to send SMS: ${response.data.status}`);
         }
       } catch (error) {
         console.error("Error sending SMS:", error);
       }

    user.role = "member";
    await user.save();
    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
