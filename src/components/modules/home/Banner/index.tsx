"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div
      className={`${styles.banner} relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-white text-center px-4`}
      // style={{ backgroundImage: "url('https://ibb.co.com/Xx9Q13Dw')" }}
    >
      {/* <div className="absolute inset-0 bg-opacity-50"></div> */}
      <h1 className="relative text-3xl md:text-7xl text-blue-400 font-bold z-10 mt-48">
        Welcome to Our Online Medicine Shop
      </h1>
      <div className="relative flex items-center w-full max-w-md mt-4 z-10">
        <Input
          type="text"
          placeholder="Search for medicines..."
          className="w-full px-4 py-2 rounded-l-lg bg-white text-black"
        />
        <Button className="px-4 py-2 rounded-r-lg bg-blue-600 hover:bg-blue-700">
          <Search className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
