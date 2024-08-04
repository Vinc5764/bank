// pages/api/news/index.ts
import { connectToDB } from "@/lib/connect";

import { NextResponse } from "next/server";
import News from "../model/news.model";
import User from "../model/user.model";

// Handler to create a new news article
export const POST = async (req: any) => {
  try {
    const { userId, newPassword } = await req.json();
    await connectToDB();
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" });
    }

    user.password = await user.hashPassword(newPassword);
    await user.save();
    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
