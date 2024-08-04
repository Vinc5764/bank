"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface RegisterFormData {
  name: string;
  email: string;
  contactNumber: string;
  constituency: string;
  password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const router = useRouter();
  const formData = watch();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);
      const mergedData = {
        ...formData,
        // Merge publicMetadata with form data
      };
      console.log("Form Data:", mergedData); // Log the form data
      const response = await axios.post(
        "www.johnkpikpi.com/api/register",
        mergedData
      );

      setLoading(false);

      if (response.status === 200) {
        // openModal();
        router.push("/verify");
      } else {
        alert("Failed to process registration");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error processing registration:", error);
      alert("An error occurred while processing the registration");
    }
  };

  return (
    <div className="relative">
      <Card className="max-w-2xl mx-auto p-6 sm:p-8 md:p-10">
        <CardHeader>
          <CardTitle className="text-3xl text-blue-950 font-bold">
            Register to Get Informed
          </CardTitle>
          <CardDescription>Provide your details and register.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-1 gap-6"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500">
                    {errors.name.message as string}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500">
                    {errors.email.message as string}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  {...register("contactNumber", {
                    required: "Contact number is required",
                  })}
                  placeholder="+1 (123) 456-7890"
                />
                {errors.contactNumber && (
                  <p className="text-red-500">
                    {errors.contactNumber.message as string}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="constituency">Constituency</Label>
                <Input
                  id="constituency"
                  type="text"
                  {...register("constituency", {
                    required: "Constituency is required",
                  })}
                  placeholder="Your Constituency"
                />
                {errors.constituency && (
                  <p className="text-red-500">
                    {errors.constituency.message as string}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  placeholder="Your Password"
                />
                {errors.password && (
                  <p className="text-red-500">
                    {errors.password.message as string}
                  </p>
                )}
              </div>
              <CardFooter className="flex justify-end gap-2">
                <Button className=" " type="submit" disabled={loading}>
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </CardFooter>
            </div>
          </form>
        </CardContent>
      </Card>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Registration Successful!
            </h2>
            <p className="mb-4">
              Thank you for registering. You will receive updates soon.
            </p>
            <Button
              onClick={closeModal}
              className="bg-blue-950 text-white px-4 py-2 rounded"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
