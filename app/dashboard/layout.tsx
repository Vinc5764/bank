"use client";

import useTokenStore from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const layout = ({ children }: any) => {
  const router = useRouter();
  const { token, userType, clearToken, name } = useTokenStore();
  // const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!token) {
      router.push("/sign-in");
    } else {
      router.push("/dashboard");
    }
  }, [router, token]);

  const handleLogout = () => {
    clearToken();
    router.push("/");
  };
  return (
    <div>
      <header className="sticky top-0 z-40 w-full bg-slate-100 shadow-sm backdrop-blur">
        <div className="container-none flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <div className="h-6 w-6" />
              <span className="text-3xl  text-[#A4167A] font-bold">POD</span>
            </Link>
          </div>
          <p
            onClick={handleLogout}
            className=" text-xl cursor-pointer font-medium"
          >
            Logout
          </p>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default layout;
