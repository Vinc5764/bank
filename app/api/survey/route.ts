import { connectToDB } from "@/lib/connect";
import Survey from "../model/survey.model";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    const { title, description, embedUrl, userId } = await req.json();

    await connectToDB();

    // Ensure `userId` is valid and `Survey` schema contains `createdBy` if used
    const survey = new Survey({
      title,
      description,
      embedUrl,
      createdBy: userId, // Assuming `createdBy` field is defined in your Survey schema
    });

    await survey.save();
    return NextResponse.json(survey);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const surveys = await Survey.find().populate("createdBy"); // Ensure `createdBy` is a field in your schema
    return NextResponse.json(surveys);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
