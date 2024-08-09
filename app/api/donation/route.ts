// pages/api/donations/index.ts
import { connectToDB } from "@/lib/connect";
import { NextResponse } from "next/server";
import Donation from "../model/donation.model";
import User from "../model/user.model"; // Import the User model

// Handler to create a new donation
export const POST = async (req: any) => {
  try {
    const { amount, donorId, userId } = req.body;

    await connectToDB();
    // Create a new donation
    const donation = new Donation({
      amount,
      donor: donorId, // Assuming donorId is passed in the request body
    });

    await donation.save();

    // Update the donations field for the user
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.donations = user.donations + amount; // Increment the donations field
    await user.save();

    return NextResponse.json(donation, user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// Handler to get all donations
export const GET = async () => {
  try {
    await connectToDB();
    const donations = await Donation.find().populate("donor");
    return NextResponse.json(donations);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// Handler to update a donation
export const PUT = async (req: any) => {
  try {
    const { id, amount } = req.body;

    await connectToDB();

    const donation = await Donation.findByIdAndUpdate(
      id,
      { amount },
      { new: true }
    );
    if (!donation) {
      return NextResponse.json(
        { error: "Donation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(donation);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// Handler to delete a donation
export const DELETE = async (req: any) => {
  try {
    const { id } = req.body;

    await connectToDB();

    const donation = await Donation.findByIdAndDelete(id);
    if (!donation) {
      return NextResponse.json(
        { error: "Donation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Donation deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// Main handler function to route requests
