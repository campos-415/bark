"use client";
import Image from "next/image";
import React, { useState } from "react";
import imageLogo from "../public/embarkaderoLogo.webp";
import { linkRoutes } from "@/constant";
import EasternEgg from "./EasternEgg";
import eggWhite from "../public/eggWhite.png";
import egg from "../public/egg.png";
import crackedEggWhite from "../public/crackedWhite.png";
import crackedEgg from "../public/cracked.png";
function Footer() {
  const [isEggCracked, setIsEggCracked] = useState(false);
  const openEgg = () => {
    setIsEggCracked(!isEggCracked);
  };
  return (
    <footer className=" rounded-lg shadow  m-4 select-none">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://embarkadero.vercel.app"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src={imageLogo} className="h-8 w-24" alt="ESC Logo" />

            <span className="hidden text-primary/70 md:inline self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              EmBARKadero Social Club
            </span>
            <span className="sm:hidden text-primary/70 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ESC
            </span>
          </a>
          <div className="flex flex-wrap space-x-4  items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {linkRoutes.map((route, i) => (
              <a key={i} className="text-xs hover:footerLink">
                {route.name}
              </a>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center space-x-2 h-16 max-w-[600px] mx-auto">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://embarkadero.vercel.app" className="hover:underline">
              Emabarkadero Social Club (ESC)™
            </a>
            . All Rights Reserved.
          </span>
          <EasternEgg
            
            isEggCracked={isEggCracked}
            openEgg={openEgg}
            egg={egg}
            eggWhite={eggWhite}
            crackedEggWhite={crackedEggWhite}
            crackedEgg={crackedEgg}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
