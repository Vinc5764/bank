// pages/api/news/index.ts
import { connectToDB } from "@/lib/connect";

import { NextResponse } from "next/server";
import News from "../model/news.model";

// Handler to create a new news article
export const POST = async (req: any) => {
  try {
    const { title, content, author, imageUrl } = await req.json();

    await connectToDB();

    const news = new News({
      title,
      content,
      imageUrl,
      // Assuming authorId is passed in the request body
    });

    await news.save();
    return NextResponse.json(news, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// Handler to get all news articles
export const GET = async () => {
  try {
    await connectToDB();
    const news = await News.find().populate("author");
    return NextResponse.json(news);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// Handler to update a news article
export const PUT = async (req: any) => {
  try {
    const { id, title, content } = req.body;

    await connectToDB();

    const news = await News.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!news) {
      return NextResponse.json(
        { error: "News article not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(news);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
