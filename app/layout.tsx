import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "300", "400", "500", "700", "900" ]
});

export const metadata: Metadata = {
  title: "Embarkadero Social Club",
  description: "Developed by Cesar C.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
        )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
      </ThemeProvider>
        </body>
    </html>
  );
}
