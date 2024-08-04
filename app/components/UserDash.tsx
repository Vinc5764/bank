"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Spinner from "./Spinner";
import useTokenStore from "@/lib/store";
import axios from "axios";

export default function UserDash() {
  const { datas, userType } = useTokenStore();
  const [members, setMembers] = useState<any>([]);
  const url =
    userType === "admin"
      ? "http://localhost:3000/api/register/"
      : `http://localhost:3000/api/register/mymembers`;

  const [newMember, setNewMember] = useState<any>({
    name: "",
    email: "",
    password: "",
    constituency: "",
    contactNumber: "",
    creator: datas._id,
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data); // Check structure
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, [datas._id]); // Add dependencies

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setNewMember((prev: any) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const memb = {
      ...newMember,
      creator: datas._id,
    };
    try {
      const response = await fetch(`http://localhost:3000/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(memb),
      });

      if (!response.ok) {
        throw new Error("Failed to add member");
      }
      const result = await response.json();
      setMembers((prev: any) => [...prev, result]);
      setNewMember({
        name: "",
        email: "",
        password: "",
        constituency: "",
        contactNumber: "",
      });
      setIsSuccessModalOpen(true);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      {/* Header section remains unchanged */}
      <header className="flex flex-col items-center gap-[150px] bg-background px-4 py-8 sm:px-6 md:flex-row justify-center md:py-12">
        <div className="flex flex-col items-center gap-4 ">
          <div
            className="rounded-full border-2 flex items-center  justify-center  h-[128px] w-[128px]"
            style={{ aspectRatio: "128/128", objectFit: "cover" }}
          >
            {/* <p className=" text-5xl text-purple-950">{datas.name[0]}</p> */}
          </div>
          <div className="grid gap-1 text-center">
            <div className="text-2xl text-[#A4167A] font-bold">
              {datas.name}
            </div>
            <div className="text-sm text-muted-foreground">
              {datas.constituency}
            </div>
            <div className="text-sm text-muted-foreground">
              {/* Donations: {datas.donations} */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Link href="/dashboard/engage">
            <Button size="lg" className="bg-[#A4167A] hover:bg-[#A4167A]">
              Engage
            </Button>
          </Link>
          <Link href="/dashboard/donate">
            {" "}
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white border-black border-2 "
            >
              Contribute
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto grid gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Members</h2>
            {/* Add Member button and dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-purple-950 hover:bg-purple-950">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Member
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create a new account</DialogTitle>
                  <DialogDescription>
                    Enter your details below to get started.
                  </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4" onSubmit={handleFormSubmit}>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={newMember.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newMember.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={newMember.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="constituency">Constituency</Label>
                    <Input
                      id="constituency"
                      value={newMember.constituency}
                      onChange={handleInputChange}
                      placeholder="Enter your constituency"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contactNumber">Contact Number</Label>
                    <Input
                      id="contactNumber"
                      type="tel"
                      value={newMember.contactNumber}
                      onChange={handleInputChange}
                      placeholder="123-456-7890"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#A4167A]">
                    {isloading ? <Spinner /> : "Create Account"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="overflow-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="md:w-[200px]">Name</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Constituency
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Contributions
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden md:table-cell">Phone</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member: any) => (
                  <TableRow key={member._id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback>
                            {/* {member.name ? member.name[0] : "U"} */}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <div className="font-medium">
                            {member.name || "Unknown"}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {member.constituency || "N/A"}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {member.donations}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <MailIcon className="w-4 h-4 text-muted-foreground" />
                        <div className="text-sm text-muted-foreground">
                          {member.email || "N/A"}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4 text-muted-foreground" />
                        <div className="text-sm text-muted-foreground">
                          {member.contactNumber || "N/A"}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto bg-[#A4167A] hover:bg-purple-950"
                          >
                            <MoveHorizontalIcon className="" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Remove Member</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={closeSuccessModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Success</DialogTitle>
            <DialogDescription>
              The new member has been added successfully.
            </DialogDescription>
            <DialogFooter>
              <Button onClick={closeSuccessModal}>Close</Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Icon components remain unchanged
// function XIcon(props) {
//   // ...
// }

// function MailIcon(props) {
//   // ...
// }

// function MoveHorizontalIcon(props) {
//   // ...
// }

// function PhoneIcon(props) {
//   // ...
// }

// function PlusIcon(props) {
//   // ...
// }
function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
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
      stroke="white"
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

function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PlusIcon(props: any) {
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
