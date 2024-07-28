import { connectToDB } from "@/lib/connect";
import User from "@/model/user.model";
import { NextResponse } from "next/server";



export const POST = async (req:any) => {
    try {
      // Parse incoming JSON data from the request body
      console.log(req);
      
      
      const { email, contactNumber, name ,constituency } = req.json();

  
      // Connect to MongoDB database
      await connectToDB();
  
      // Create a new vehicle instance
      const newUser = new User({
        email,
        contactNumber,
        name,
        constituency
      });
      // Save the new vehicle to the database
      await newUser.save();
  
      // Respond with success message
      return NextResponse.json({ message: 'Vehicle created successfully' });
    } catch (error) {
      // Handle errors
      console.error('Error creating vehicle:', error);
      return NextResponse.json({ message: 'Failed to create vehicle' }, { status: 500 });
    }
  };
  
  