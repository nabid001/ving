import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="top-0 p-4 bg-slate-300">
      <nav className="flex items-center justify-between">
        <Link href="/">Home</Link>
        <div>search</div>
        <div className="flex gap-2 items-center justify-center">
          <Link href="/upload-video">Upload</Link>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
