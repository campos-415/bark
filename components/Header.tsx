"use client";
import React from "react";
import Container from "./Container";
import Links from "next/link";
import LogoImage from "../public/embarkaderoLogo.webp";
import LogoImageWhite from "../public/embarkaderoLogoWhite.png";
import Image from "next/image";
import { linkRoutes } from "@/constant";
import { Button } from "./ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-scroll";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b fixed z-[100] bg-white dark:bg-[#001519] mx-auto w-full select-none">
      <Container>
        <div className="relative  sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  aria-label="Menu Icon">
                  <Menu className="h-6 w-6 md:hidden z-50" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="mt-[90px] w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 ">
                  {linkRoutes.map((route) => (
                    <Link
                      key={route.id}
                      smooth
                      to={route.linkTo}
                      className="block px-2 py-1 text-lg hover:link">
                      {route.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Links className="ml-12" href={"/"}>
              {theme === "light" ? (
                <Image
                  src={LogoImage}
                  width={100}
                  height={100}
                  alt="Image Logo"
                />
              ) : (
                <Image
                  src={LogoImageWhite}
                  width={100}
                  height={100}
                  alt="Image Logo"
                />
              )}
            </Links>
          </div>
          <nav className="mx-6 md:flex items-center space-x-4 lg:space-x-6 hidden">
            {linkRoutes.map((route, i) => (
              <Button key={i} asChild variant="ghost">
                <Link
                  smooth
                  to={route?.linkTo}
                  className="text-sm font-medium transition-colors hover:cursor-pointer">
                  {route.name}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              className="mr-6"
              aria-label="Toogle Theme">
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toogle Theme</span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
