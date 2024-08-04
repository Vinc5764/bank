"use client";
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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import Image from "next/image";
import useTokenStore from "@/lib/store";
const baseURL = "https://www.johnkpikpi.com/api"; // Base URL without trailing slash

export default function Engage() {
  const [news, setNews] = useState<any>([]);
  const [surveys, setSurveys] = useState<any>([]);
  const [error, setError] = useState("");
  const [selectedSurvey, setSelectedSurvey] = useState<any>(null);
  const { userType } = useTokenStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch News
        const newsResponse = await fetch(`${baseURL}/news`);
        if (!newsResponse.ok) throw new Error("Failed to fetch news");
        const newsData = await newsResponse.json();
        setNews(newsData);

        // Fetch Surveys
        const surveysResponse = await fetch(`${baseURL}/survey`);
        if (!surveysResponse.ok) throw new Error("Failed to fetch surveys");
        const surveysData = await surveysResponse.json();
        setSurveys(surveysData);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const handleTakeSurvey = (survey: any) => {
    setSelectedSurvey(survey);
  };

  return (
    <div className="w-full min-h-screen bg-background">
      <main className="py-10 px-6">
        <section>
          {userType === "admin" && (
            <div className="flex items-center justify-end gap-4">
              <Link href="/dashboard/news">
                <Button className="bg-[#A4167A] hover:bg-[#A4167A]" size="sm">
                  Add News
                </Button>
              </Link>
              <Link href="/dashboard/survey">
                <Button
                  className="bg-white text-black border-2 border-black hover:bg-white"
                  size="sm"
                >
                  Add Survey
                </Button>
              </Link>
            </div>
          )}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Latest News</h2>
            {/* <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="icon">
                <div className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <div className="h-4 w-4" />
              </Button>
            </div> */}
          </div>
          <Carousel className="w-full max-w-6xl">
            <CarouselContent>
              {news.map((item: any) => (
                <CarouselItem key={item._id} className="md:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col justify-between">
                      <div>
                        <Image
                          src={item.imageUrl}
                          width={400}
                          height={225}
                          alt="News Image"
                          className="aspect-video w-full rounded-t-md object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg text-purple-950 font-semibold">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-muted-foreground">
                            {item.content.length > 100
                              ? `${item.content.substring(0, 100)}...`
                              : item.content}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm text-[#A4167A] text-muted-foreground">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </div>
                        <Link
                          href="#"
                          className="text-[#A4167A]"
                          prefetch={false}
                        >
                          Read more
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </section>
        <section>
          <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10">
            Latest Surveys
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {surveys.map((survey: any) => (
              <Card key={survey._id}>
                <CardContent>
                  <div className="flex items-center py-4 justify-between">
                    <div className="flex items-center  gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src="/placeholder-user.jpg"
                          alt="User Avatar"
                        />
                        <AvatarFallback>S</AvatarFallback>
                      </Avatar>
                      <div>
                        {/* <div className="text-sm font-medium">Acme Inc.</div> */}
                        <div className="text-xs text-muted-foreground">
                          {new Date(survey.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-4">
                    <h3 className="text-base font-semibold">{survey.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {survey.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Button
                        size="sm"
                        className=" bg-purple-950 text-white"
                        variant="outline"
                        onClick={() => handleTakeSurvey(survey)}
                      >
                        Take Survey
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {selectedSurvey && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white h-full w-full p-4 rounded-lg  ">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedSurvey.title}</h3>
                <Button onClick={() => setSelectedSurvey(null)}>Close</Button>
              </div>
              <iframe
                src={selectedSurvey.embedUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function MoveHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}
