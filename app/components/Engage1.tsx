/**
 * v0 by Vercel.
 * @see https://v0.dev/t/W59z5mF77vY
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="w-full">
      <header className="bg-background px-4 py-3 shadow-sm sm:px-6 md:py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2"
              prefetch={false}
            >
              <NewspaperIcon className="h-5 w-5" />
              <span className="font-medium">News &amp; Surveys</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add News
            </Button>
            <Button size="sm" variant="outline">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Survey
            </Button>
          </div>
        </div>
      </header>
      <main className="container py-8 sm:py-12 md:py-16">
        <section>
          <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10">
            Latest News
          </h2>
          <Carousel className="overflow-hidden rounded-lg">
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                  <Card className="col-span-1 sm:col-span-2">
                    <CardContent>
                      <img
                        src="/placeholder.svg"
                        width={800}
                        height={400}
                        alt="News Image"
                        className="aspect-[16/9] w-full rounded-md object-cover"
                      />
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Technology
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            2 hours ago
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold">
                          Acme Unveils Groundbreaking AI-Powered Platform
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Acme Inc. has announced the launch of their latest
                          innovation, an AI-powered platform that promises to
                          revolutionize the way businesses operate.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="col-span-1 grid gap-4 sm:grid-rows-2">
                    <Card>
                      <CardContent>
                        <img
                          src="/placeholder.svg"
                          width={400}
                          height={225}
                          alt="News Image"
                          className="aspect-video w-full rounded-md object-cover"
                        />
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              Business
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              1 day ago
                            </span>
                          </div>
                          <h4 className="text-base font-semibold">
                            Acme Expands into New Markets
                          </h4>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <img
                          src="/placeholder.svg"
                          width={400}
                          height={225}
                          alt="News Image"
                          className="aspect-video w-full rounded-md object-cover"
                        />
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              Technology
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              3 days ago
                            </span>
                          </div>
                          <h4 className="text-base font-semibold">
                            Acme Unveils New Product Line
                          </h4>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                  <Card className="col-span-1 sm:col-span-2">
                    <CardContent>
                      <img
                        src="/placeholder.svg"
                        width={800}
                        height={400}
                        alt="News Image"
                        className="aspect-[16/9] w-full rounded-md object-cover"
                      />
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Finance
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            1 week ago
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold">
                          Acme Announces Record Quarterly Earnings
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Acme Inc. has reported its highest quarterly earnings
                          to date, surpassing industry expectations and
                          showcasing the company's continued growth and success.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="col-span-1 grid gap-4 sm:grid-rows-2">
                    <Card>
                      <CardContent>
                        <img
                          src="/placeholder.svg"
                          width={400}
                          height={225}
                          alt="News Image"
                          className="aspect-video w-full rounded-md object-cover"
                        />
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              Marketing
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              2 weeks ago
                            </span>
                          </div>
                          <h4 className="text-base font-semibold">
                            Acme Launches New Advertising Campaign
                          </h4>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <img
                          src="/placeholder.svg"
                          width={400}
                          height={225}
                          alt="News Image"
                          className="aspect-video w-full rounded-md object-cover"
                        />
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              Human Resources
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              1 month ago
                            </span>
                          </div>
                          <h4 className="text-base font-semibold">
                            Acme Announces New Hiring Initiatives
                          </h4>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious>
              <ChevronLeftIcon className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext>
              <ChevronRightIcon className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </section>
        <Separator className="my-8 sm:my-12 md:my-16" />
        <section>
          <h2 className="mb-6 text-2xl font-bold sm:mb-8 md:mb-10">
            Latest Surveys
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="User Avatar"
                      />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">Acme Inc.</div>
                      <div className="text-xs text-muted-foreground">
                        2 days ago
                      </div>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost">
                    <MoveHorizontalIcon className="h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-base font-semibold">
                    Customer Satisfaction Survey
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Help us improve our products and services by sharing your
                    feedback.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      Marketing
                    </Badge>
                    <Button size="sm" variant="outline">
                      Take Survey
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="User Avatar"
                      />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">Acme Inc.</div>
                      <div className="text-xs text-muted-foreground">
                        1 week ago
                      </div>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost">
                    <MoveHorizontalIcon className="h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-base font-semibold">
                    Product Feedback Survey
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Share your thoughts on our latest product release.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      Product
                    </Badge>
                    <Button size="sm" variant="outline">
                      Take Survey
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="User Avatar"
                      />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">Acme Inc.</div>
                      <div className="text-xs text-muted-foreground">
                        2 weeks ago
                      </div>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost">
                    <MoveHorizontalIcon className="h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-base font-semibold">
                    Employee Satisfaction Survey
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Help us improve our workplace culture and employee
                    experience.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      Human Resources
                    </Badge>
                    <Button size="sm" variant="outline">
                      Take Survey
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder-user.jpg"
                        alt="User Avatar"
                      />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">Acme Inc.</div>
                      <div className="text-xs text-muted-foreground">
                        1 month ago
                      </div>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost">
                    <MoveHorizontalIcon className="h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-base font-semibold">
                    Brand Awareness Survey
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how well our brand is known in the
                    market.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      Marketing
                    </Badge>
                    <Button size="sm" variant="outline">
                      Take Survey
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
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

function NewspaperIcon(props) {
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
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
