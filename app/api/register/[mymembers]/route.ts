import { connectToDB } from "@/lib/connect";
import User from "@/app/api/model/user.model";
import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

export const GET = async (req: any, { params }: any) => {
  try {
    // Connect to MongoDB database
    await connectToDB();

    // const { mymembers } = params;

    // const { searchParams } = new URL(req.url);
    // const creator = searchParams.get("creator");
    // Retrieve all users from the database
    const users = await User.find({ creator }); // Use appropriate query if needed

    // Respond with list of users
    return NextResponse.json(users);
  } catch (error) {
    // Handle errors
    console.error("Error retrieving users:", error);
    return NextResponse.json(
      { message: "Failed to retrieve users" },
      { status: 500 }
    );
  }
};
