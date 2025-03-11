"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Heart,
  ShoppingBag,
  User,
  Info,
  Tablet,
  Box,
  LogIn,
  LogOut,
} from "lucide-react"; // Import icons
import { useState } from "react"; // Import useState to manage menu state
import Image from "next/image";
import logo from "../../assets/images (1).png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle the mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the state when the hamburger icon is clicked
  };

  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <Image
          //   src="https://ibb.co.com/TxyLy49h"
          src={logo}
          alt="MediMart Logo"
          height={50}
          width={50}
        />
        {/* <h1 className="text-2xl font-black flex items-center">MediMart</h1> */}

        {/* Mobile Hamburger Icon - Shown only on small screens */}
        

        {/* Desktop Links - Hidden on small screens */}
        <div className="hidden md:flex gap-6 order-1">
          <Link
            href="/about"
            className="flex items-center gap-2 hover:underline"
          >
            <Info className="w-5 h-5" /> About
          </Link>
          <Link
            href="/medicine"
            className="flex items-center gap-2 hover:underline"
          >
            <Tablet className="w-5 h-5" /> Medicine
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 hover:underline"
          >
            <Box className="w-5 h-5" /> Dashboard
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 hover:underline"
          >
            <LogIn className="w-5 h-5" /> Login
          </Link>
          <Link
            href="/logout"
            className="flex items-center gap-2 hover:underline"
          >
            <LogOut className="w-5 h-5" /> Logout
          </Link>
        </div>

        {/* Navbar Icons (User, ShoppingBag, Heart) */}
        <nav className=" flex gap-2 order-3">
        <div
          className="md:hidden flex items-center order-2"
          onClick={toggleMobileMenu}
        >
          <Button variant="outline" className="rounded-full p-2">
            <span className="text-xl">☰</span> {/* Hamburger icon */}
          </Button>
        </div>
          <Button variant="outline" className="rounded-full p-2 size-10">
            <Heart />
          </Button>
          <Button variant="outline" className="rounded-full p-2 size-10">
            <ShoppingBag />
          </Button>
          <Button variant="outline" className="rounded-full p-2 size-10">
            <User />
          </Button>
        </nav>
      </div>

      {/* Mobile Links (Hidden by default, visible when hamburger menu is toggled) */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col items-center gap-4 mt-4`}
      >
        <Link href="/about" className="flex items-center gap-2 hover:underline">
          <Info className="w-5 h-5" /> About
        </Link>
        <Link
          href="/medicine"
          className="flex items-center gap-2 hover:underline"
        >
          <Tablet className="w-5 h-5" /> Medicine
        </Link>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 hover:underline"
        >
          <Box className="w-5 h-5" /> Dashboard
        </Link>
        <Link href="/login" className="flex items-center gap-2 hover:underline">
          <LogIn className="w-5 h-5" /> Login
        </Link>
        <Link
          href="/logout"
          className="flex items-center gap-2 hover:underline"
        >
          <LogOut className="w-5 h-5" /> Logout
        </Link>
      </div>
    </header>
  );
}
