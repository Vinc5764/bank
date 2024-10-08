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
import useTokenStore from "@/lib/store";
import axios from "axios";
import Spinner from "./Spinner";
import placeholder from "@/public/placeholder.webp";

export default function UserDash() {
  const { datas, userType }: any = useTokenStore();
  const [members, setMembers] = useState<any>([]);
  const baseURL = "https://www.johnkpikpi.com/api";
  // const baseURL = "http://localhost:3000/api";
  const url =
    userType === "admin"
      ? `${baseURL}/register/`
      : `${baseURL}/register/mymembers`;

  const [newMember, setNewMember] = useState<any>({
    name: "",
    email: "",
    password: "",
    constituency: "",
    contactNumber: "",
    creator: datas._id,
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isPasswordResetModalOpen, setIsPasswordResetModalOpen] = useState<any>(
    userType === "newmember"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const { setUserType }: any = useTokenStore();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            creator: datas._id,
          },
        });
        console.log(response.data);
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, [datas._id, url]);

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
      const response = await fetch(`${baseURL}/register/`, {
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

  const handlePasswordReset = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/reset-pass`, {
        userId: datas._id,
        newPassword,
      });

      if (response.status === 201) {
        alert("Password reset successfully");
        setUserType("member");
        setIsPasswordResetModalOpen(false);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const closePasswordResetModal = () => {
    setIsPasswordResetModalOpen(false);
  };

  const openProfileModal = (member: any) => {
    setSelectedMember(member);
  };

  const closeProfileModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <header className="flex flex-col items-center gap-[150px] bg-background px-4 py-8 sm:px-6 md:flex-row justify-center md:py-12">
        <div className="flex flex-col items-center gap-4">
          <div
            className="rounded-full border-2 flex items-center justify-center h-[128px] w-[150px]"
            style={{ aspectRatio: "128/128", objectFit: "cover" }}
          >
            <Image src={placeholder} alt="placeholder" />
          </div>
          <div className="grid gap-1 text-center">
            <div className="text-2xl text-[#A4167A] font-bold">
              {datas.name}
            </div>
            <div className="text-sm text-muted-foreground">
              {datas.constituency}
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
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white border-black border-2"
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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-purple-950 hover:bg-purple-950">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Friends
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create a new account</DialogTitle>
                  <DialogDescription>
                    Enter your details of the new member to get started.
                  </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4" onSubmit={handleFormSubmit}>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={newMember.name}
                      onChange={handleInputChange}
                      placeholder="Name"
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
                    <Label htmlFor="password">New Member Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={newMember.password}
                      onChange={handleInputChange}
                      placeholder="Set New Member Password"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="constituency">Constituency</Label>
                    <Input
                      id="constituency"
                      value={newMember.constituency}
                      onChange={handleInputChange}
                      placeholder="Enter  constituency"
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
                    {isLoading ? <Spinner /> : "Create Account"}
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
                {members.map((member: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {member.constituency}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {member.contributions || 0}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {member.email}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {member.contactNumber}
                    </TableCell>
                    <TableCell className="flex justify-between space-x-2">
                      <Button
                        size="sm"
                        className="bg-[#A4167A] text-white hover:bg-[#A4167A]"
                        onClick={() => openProfileModal(member)}
                      >
                        View Profile
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>

      {selectedMember && (
        <Dialog open={true} onOpenChange={closeProfileModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Member Profile</DialogTitle>
              <DialogDescription>
                Details of the selected member.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={selectedMember.name} readOnly />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={selectedMember.email} readOnly />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="constituency">Constituency</Label>
                <Input
                  id="constituency"
                  value={selectedMember.constituency}
                  readOnly
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  value={selectedMember.contactNumber}
                  readOnly
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={closeProfileModal} className="mt-4">
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Success</DialogTitle>
            <DialogDescription>
              The member has been successfully added.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={closeSuccessModal} className="mt-4">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isPasswordResetModalOpen}
        onOpenChange={setIsPasswordResetModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Password Reset</DialogTitle>
            <DialogDescription>Please reset your password.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordReset} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e: any) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="mt-4">
              Reset Password
            </Button>
          </form>
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
