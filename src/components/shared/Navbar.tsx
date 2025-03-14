"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Heart,
  ShoppingBag,
  Info,
  Box,
  LogIn,
  LogOut,
  User,
  Home,
  ShoppingBagIcon,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images (1).png";
import { logout } from "@/services/AuthService";
import { protectedRoutes } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <Image src={logo} alt="MediMart Logo" height={50} width={50} />

        <div className="hidden md:flex gap-6 order-1">
          <Link href="/" className="flex items-center gap-2 hover:underline">
            <Home className="w-5 h-5" /> Home
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 hover:underline"
          >
            <Info className="w-5 h-5" /> About
          </Link>
          <Link
            href="/shop"
            className="flex items-center gap-2 hover:underline"
          >
            <ShoppingBagIcon className="w-5 h-5" /> Shop
          </Link>
          <Link
            href={
              user?.role === "admin" ? "/admin/dashboard" : "/user/dashboard"
            }
            className="flex items-center gap-2 hover:underline"
          >
            <Box className="w-5 h-5" /> Dashboard
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 hover:underline"
            >
              <LogOut className="w-5 h-5" /> Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 hover:underline"
            >
              <LogIn className="w-5 h-5" /> Login
            </Link>
          )}
        </div>

        <nav className="flex gap-2 order-3">
          <div
            className="md:hidden flex items-center order-2"
            onClick={toggleMobileMenu}
          >
            <Button variant="outline" className="rounded-full p-2">
              <span className="text-xl">☰</span>
            </Button>
          </div>
          <Button variant="outline" className="rounded-full p-2 size-10">
            <Heart />
          </Button>
          <Button variant="outline" className="rounded-full p-2 size-10">
            <ShoppingBag />
          </Button>
          <Button variant="outline" className="rounded-full p-2 size-10">
            {user ? (
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <User className="w-5 h-5" />
            )}
          </Button>
        </nav>
      </div>

      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col items-center gap-4 mt-4`}
      >
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <Home className="w-5 h-5" /> Home
        </Link>
        <Link href="/about" className="flex items-center gap-2 hover:underline">
          <Info className="w-5 h-5" /> About
        </Link>
        <Link href="/shop" className="flex items-center gap-2 hover:underline">
          <ShoppingBag className="w-5 h-5" /> Shop
        </Link>
        <Link
          href={user?.role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
          className="flex items-center gap-2 hover:underline"
        >
          <Box className="w-5 h-5" /> Dashboard
        </Link>
        {user ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 hover:underline"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 hover:underline"
          >
            <LogIn className="w-5 h-5" /> Login
          </Link>
        )}
      </div>
    </header>
  );
}
