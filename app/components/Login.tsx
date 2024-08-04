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
import useTokenStore from "@/lib/store";
const baseURL = "https://www.johnkpikpi.com/api" || "http://localhost:3000/api"; // Base URL without trailing slash
// const baseURL = "http://localhost:3000/api"; // Base URL without trailing slash

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const { setToken } = useTokenStore();
  const router = useRouter();
  const formData = watch();
  const mergedData = {
    ...formData,
    // Merge publicMetadata with form data
  };
  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);

      const response = await axios.post(`${baseURL}/sign-in`, mergedData);
      setToken(
        response.data.token,
        response.data.user.role,
        response.data.user.name,
        response.data.user
      );
      setLoading(false);

      if (response.status === 200) {
        // Handle successful login, e.g., store token, redirect, etc.
        openModal();
        router.push("/dashboard"); // Redirect to dashboard or desired page
      } else {
        alert("Failed to login");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error logging in:", error);
      alert("An error occurred while logging in");
    }
  };

  return (
    <div className="relative">
      <Card className="max-w-2xl mx-auto p-6 sm:p-8 md:p-10">
        <CardHeader>
          <CardTitle className="text-3xl text-blue-950 font-bold">
            Login
          </CardTitle>
          <CardDescription>
            Enter your email and password to login.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-1 gap-6"
          >
            <div className="space-y-4">
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
            <h2 className="text-2xl font-bold mb-4">Login Successful!</h2>
            <p className="mb-4">You have successfully logged in.</p>
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
