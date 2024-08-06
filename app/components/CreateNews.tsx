"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Spinner from "./Spinner";
import { uploadFile } from "@/lib/upload";
const baseURL = "https://www.johnkpikpi.com/api"; // Base URL without trailing slash
// const baseURL = "http://localhost:3000/api"; 

const createNews:any = async (newsData:any) => {
  try {
    const response = await fetch(`${baseURL}/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsData),
    });
    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || "Failed to create news");
    }
  } catch (error) {
    console.error("Error creating news:", error);
    throw error;
  }
};

export default function CreateNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (event:any) => {
    setIsLoading(true);
    event.preventDefault();
    setError(null);

    try {
      let imageUrl:any = "";
      if (image) {
        imageUrl = await uploadFile(image);
      }

      const newsData = {
        title,
        content,
        author, // Assuming author is passed as an ID or can be resolved on the server side
        imageUrl: imageUrl.secure_url,
      };

      await createNews(newsData);
      router.push("/dashboard/engage"); // Redirect or show success message
    } catch (error:any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl text-[#A4167A] font-bold">
            Create a New Article
          </h1>
          <p className="text-muted-foreground">
            Fill out the form below to submit a new article.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Article Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the article title"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter the article content"
              className="min-h-[200px]"
              required
            />
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter the author's name"
              required
            />
          </div> */}
          <div className="space-y-2">
            <Label htmlFor="image">Featured Image</Label>
            <Input
              id="image"
              type="file"
              onChange={(e:any) => setImage(e.target.files[0])}
            />
          </div>
          <Button type="submit" className="w-full bg-blue-950">
            {isloading ? <Spinner /> : "Submit Article"}
          </Button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}
