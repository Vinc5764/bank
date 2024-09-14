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
const baseURL = "https://www.johnkpikpi.com/api"; // Base URL without trailing slash

interface DonationFormData {
  email: string;
  contactNumber: string;
  amount: number;
  currency: string; // Add currency field
}

export default function DonationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DonationFormData>();
  const [loading, setLoading] = useState(false);
  const { datas } = useTokenStore();

  const router = useRouter();
  const formData = watch();

  const onSubmit = async (data: DonationFormData) => {
    try {
      setLoading(true);
      const mergedData = {
        ...formData,
        userId: datas._id,
        // Merge publicMetadata with form data
      };
      console.log("Form Data:", mergedData); // Log the form data
      const response = await axios.post(`${baseURL}/payment`, mergedData);

      console.log(response);

      setLoading(false);

      if (response.status === 200) {
        // Assuming the response contains a URL to redirect to
        const { url } = response.data;
        router.push(url);
      } else {
        alert("Failed to process donation");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error processing donation:", error);
      alert("An error occurred while processing the donation");
    }
  };

  return (
    <Card className="max-w-2xl mx-auto p-6 mt-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl text-blue-950 font-bold">
          Donation Form
        </CardTitle>
        <CardDescription>
          Provide your details and donation amount.
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
                <p className="text-red-500">{errors.email.message as string}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                {...register("amount", {
                  required: "Amount is required",
                  min: 1,
                })}
                placeholder="Enter amount to donate"
              />
              {errors.amount && (
                <p className="text-red-500">
                  {errors.amount.message as string}
                </p>
              )}
            </div>

            {/* Currency Selection */}
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <select
                id="currency"
                {...register("currency", { required: "Currency is required" })}
                className="px-4 py-2 text-black bg-white rounded border"
              >
                <option value="GHS">GHS</option>
                <option value="USD">USD</option>
              </select>
              {errors.currency && (
                <p className="text-red-500">{errors.currency.message as string}</p>
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
  );
}
