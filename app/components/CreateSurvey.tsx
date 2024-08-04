"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Spinner from "./Spinner";

// Function to handle survey creation
const createSurvey = async (surveyData:any) => {
  try {
    const response = await fetch("http://localhost:3000/api/survey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(surveyData),
    });

    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || "Failed to create survey");
    }
  } catch (error) {
    console.error("Error creating survey:", error);
    throw error;
  }
};

// Survey form component
export default function CreateSurvey() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");
  const [createdBy, setCreatedBy] = useState(""); // Typically you might get this from user context or session
  const [error, setError] = useState(null);
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (event:any) => {
    setIsLoading(true);
    event.preventDefault();
    setError(null);

    const surveyData = {
      title,
      description,
      embedUrl,
      createdBy,
    };

    try {
      await createSurvey(surveyData);
      router.push("/dashboard/engage"); // Redirect or show success message
    } catch (error:any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl text-purple-950 font-bold mb-4">
        Create a New Survey
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="embedUrl" className="block text-sm font-medium">
            Embed URL
          </label>
          <Input
            id="embedUrl"
            value={embedUrl}
            onChange={(e) => setEmbedUrl(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="bg-[#A4167A]">
            {isloading ? <Spinner /> : "Create Survey"}
          </Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
