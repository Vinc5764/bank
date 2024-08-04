import { connectToDB } from "@/lib/connect";
import User from "@/app/api/model/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

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

    const creatorDetails: any = User.findById(creator);
    // Create a new user instance
    const newUser = new User({
      email,
      contactNumber,
      name,
      creator,
      constituency,
      password: hashedPassword,
      role: "admin",
    });
    const url = "https://www.johnkpikpi.com/sign-in";
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "kanbanc01@gmail.com",
        pass: "aftoiqfzhbjwrrzp",
      },
    });

    let mailOptions;

    if (creator) {
      // Email data when creator is provided
      mailOptions = {
        from: "kanbanc01@gmail.com",
        to: email,
        subject: "Account Created by Creator",
        text: `Hello ${name},\n\nYour account has been created by ${creatorDetails.name}. Your credentials are as follows:\n\nEmail: ${email}\nPassword: ${password}\n\nPlease change your password after your first login\n ${url}.\n\nRegards,\nTeam`,
      };
    } else {
      // Email data when creator is not provided
      mailOptions = {
        from: "kanbanc01@gmail.com",
        to: email,
        subject: "Account Successfully Created",
        text: `Hello ${name},\n\nYour account has been successfully created. Your credentials are as follows:\n\nEmail: ${email}\nPassword: ${password}\n\nPlease change your password after your first login.\n\nRegards,\nTeam`,
      };
    }

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

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
