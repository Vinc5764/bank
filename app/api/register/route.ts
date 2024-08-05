import { connectToDB } from "@/lib/connect";
import User from "@/app/api/model/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import axios from "axios";

export const POST = async (req: any) => {
  try {
    // Parse incoming JSON data from the request body
    const { email, contactNumber, name, creator, password, constituency } =
      await req.json();

    console.log(email, contactNumber, name, creator);

    // Connect to MongoDB database
    await connectToDB();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const creatorDetails: any = await User.findById(creator);
    // Create a new user instance
    const newUser = new User({
      email,
      contactNumber,
      name,
      creator,
      constituency,
      password: hashedPassword,
      role: creator ? "newmember" : "member",
    });

    // SMS message content
    const url = "https://www.johnkpikpi.com/sign-in";
    let message;

    if (creator) {
      message = `Hello ${name},\n\nYour account has been created by ${creatorDetails.name}. Your credentials are as follows:\n\nEmail: ${email}\nPassword: ${password}\n\nPlease change your password after your first login\n ${url}.\n\nRegards,\nTeam`;
    } else {
      message = `Hello ${name},\n\nYour account has been successfully created. Your credentials are as follows:\n\nEmail: ${email}\nPassword: ${password}\n\nPlease change your password after your first login.\n\nRegards,\nTeam`;
    }

    // Send SMS using mNotify
    const apiKey = "6QTS3io5p3Vqc03BCewDbaIXK"; // Store your mNotify API key in .env file
    const senderId = "CoreBanc"; // Store your mNotify sender ID in .env file

    const smsUrl = `https://api.mnotify.com/api/sms/quick?key=${apiKey}&to=${contactNumber}&msg=${encodeURIComponent(
      message
    )}&sender_id=${senderId}`;

    try {
      const response = await axios.get(smsUrl);
      if (response.data.status === "1000") {
        console.log("SMS sent successfully");
      } else {
        console.log(`Failed to send SMS: ${response.data.status}`);
      }
    } catch (error) {
      console.error("Error sending SMS:", error);
    }

    // Save the new user to the database
    await newUser.save();

    // Respond with success message
    return NextResponse.json({ message: "User created successfully", newUser });
  } catch (error) {
    // Handle errors
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 }
    );
  }
};

export const GET = async (req: any) => {
  try {
    // Connect to MongoDB database
    await connectToDB();

    // Retrieve all users from the database
    const users = await User.find(); // Use appropriate query if needed

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
