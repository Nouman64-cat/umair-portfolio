import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BaseNavbar from "./components/navbar/BaseNavbar";
import Footer from "./components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Umair Aslam",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-axiforma bg-dark_bg`}
      >
        <BaseNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
