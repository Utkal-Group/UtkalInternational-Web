'use client'; // This tells Next.js that this component is a Client Component

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import "./globals.css";
import Header from "@/layouts/Header";
import { LanguageProvider } from "@/LanguageContext"; // Import your LanguageProvider
import SideBar from "../layouts/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body className="">
        {/* Wrap the layout with the LanguageProvider */}
        <LanguageProvider>
          <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
          <div className="flex">
            <div className="w-fit">
              <SideBar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>
            <div className="w-full overflow-y-auto h-[calc(100vh-5rem)]">
              {children}
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
