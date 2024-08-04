import React from "react";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UQbvoeJVKwh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SurveyDetails = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Customer Satisfaction Survey
              </h3>
              <p className="mt-2 text-muted-foreground">
                Help us improve our products and services by sharing your
                feedback.
              </p>
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea id="feedback" placeholder="Share your thoughts" />
            </div>
            <Button type="submit" className="w-full">
              Submit Survey
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SurveyDetails;
