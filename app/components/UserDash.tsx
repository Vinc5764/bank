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

// Icon components
const XIcon = (props: any) => (
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

const MailIcon = (props: any) => (
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

const MoveHorizontalIcon = (props: any) => (
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

const PhoneIcon = (props: any) => (
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

const PlusIcon = (props: any) => (
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

// Main component
const UserDash: React.FC = () => {
  const { datas, userType } = useTokenStore();
  const [members, setMembers] = useState<any[]>([]);
  const [newMember, setNewMember] = useState<any>({
    name: "",
    email: "",
    password: "",
    constituency: "",
    contactNumber: "",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/register");
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewMember((prev: any) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newMember, creator: datas._id }),
      });

      if (!response.ok) {
        throw new Error("Failed to add member");
      }
      const result = await response.json();
      setMembers((prev) => [...prev, result]);
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
      <Header datas={datas} />
      <main className="flex-1 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto grid gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Members</h2>
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
                  <FormInput
                    label="Name"
                    id="name"
                    value={newMember.name}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Email"
                    id="email"
                    type="email"
                    value={newMember.email}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Password"
                    id="password"
                    type="password"
                    value={newMember.password}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Constituency"
                    id="constituency"
                    value={newMember.constituency}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Contact Number"
                    id="contactNumber"
                    type="tel"
                    value={newMember.contactNumber}
                    onChange={handleInputChange}
                  />
                  <Button type="submit" className="w-full bg-[#A4167A]">
                    {isLoading ? <Spinner /> : "Create Account"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <MembersTable members={members} />
        </div>
      </main>
      <Dialog open={isSuccessModalOpen} onOpenChange={closeSuccessModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Success!</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Member has been added successfully.
          </DialogDescription>
          <DialogFooter>
            <Button onClick={closeSuccessModal}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Header: React.FC<{ datas: any }> = ({ datas }) => (
  // <header className="bg-background shadow-sm py-4">
  //   <div className="container mx-auto px-4 flex justify-between items-center">
  //     <div className="flex items-center gap-4">
  //       <Avatar>
  //         <AvatarImage src={datas.imageUrl} alt="avatar" />
  //         <AvatarFallback>DP</AvatarFallback>
  //       </Avatar>
  //       <div>
  //         <p className="text-sm font-medium">
  //           {datas.firstName} {datas.lastName}
  //         </p>
  //         <p className="text-xs text-muted-foreground">{datas.email}</p>
  //       </div>
  //     </div>
  //     <DropdownMenu>
  //       <DropdownMenuTrigger asChild>
  //         <Button variant="ghost" className="relative h-8 w-8 rounded-full">
  //           <Avatar>
  //             <AvatarImage src={datas.imageUrl} alt="avatar" />
  //             <AvatarFallback>DP</AvatarFallback>
  //           </Avatar>
  //         </Button>
  //       </DropdownMenuTrigger>
  //       <DropdownMenuContent className="w-56">
  //         <DropdownMenuItem>
  //           <Link href="/settings">Settings</Link>
  //         </DropdownMenuItem>
  //         <DropdownMenuItem>
  //           <Link href="/logout">Logout</Link>
  //         </DropdownMenuItem>
  //       </DropdownMenuContent>
  //     </DropdownMenu>
  //   </div>
  // </header>
  <header className="flex flex-col items-center gap-[150px] bg-background px-4 py-8 sm:px-6 md:flex-row justify-center md:py-12">
    <div className="flex flex-col items-center gap-4 ">
      <div
        className="rounded-full border-2 flex items-center  justify-center  h-[128px] w-[128px]"
        style={{ aspectRatio: "128/128", objectFit: "cover" }}
      >
        <p className=" text-5xl text-purple-950">{datas.name[0]}</p>
      </div>
      <div className="grid gap-1 text-center">
        <div className="text-2xl text-[#A4167A] font-bold">{datas.name}</div>
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
);

const FormInput: React.FC<{
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, id, type = "text", value, onChange }) => (
  <div className="grid gap-2">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} value={value} onChange={onChange} />
  </div>
);

const MembersTable: React.FC<{ members: any[] }> = ({ members }) => (
  // <div className="space-y-2">
  //   <Table>
  //     <TableHeader>
  //       <TableRow>
  //         <TableHead className="w-[100px]">Name</TableHead>
  //         <TableHead>Constituency</TableHead>
  //         <TableHead>Email</TableHead>
  //         <TableHead>Contact Number</TableHead>
  //       </TableRow>
  //     </TableHeader>
  //     <TableBody>
  //       {members.length > 0 ? (
  //         members.map((member) => (
  //           <TableRow key={member.id}>
  //             <TableCell className="font-medium">{member.name}</TableCell>
  //             <TableCell>{member.constituency}</TableCell>
  //             <TableCell>{member.email}</TableCell>
  //             <TableCell>{member.contactNumber}</TableCell>
  //           </TableRow>
  //         ))
  //       ) : (
  //         <TableRow>
  //           <TableCell colSpan={4} className="text-center">
  //             <Image
  //               src="/images/empty.png"
  //               alt="No data fetched"
  //               width={200}
  //               height={200}
  //             />
  //             <p>No data fetched</p>
  //           </TableCell>
  //         </TableRow>
  //       )}
  //     </TableBody>
  //   </Table>
  // </div>
  <div className="overflow-auto">
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="md:w-[200px]">Name</TableHead>
          <TableHead className="hidden md:table-cell">Constituency</TableHead>
          <TableHead className="hidden md:table-cell">Contributions</TableHead>
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
                    {member.name ? member.name[0] : "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-medium">{member.name || "Unknown"}</div>
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
);

export default UserDash;
