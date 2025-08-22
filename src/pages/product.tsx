
import Faq from "@/components/Aboutus/Faq";
import Breadcrumb from "@/components/Farming/Breadcrumb";
import FeaturesSection from "@/components/Farming/Featuresection";

import StatsSection from "@/components/Farming/Statesection";
import Layout from "@/components/product/src/app/layout";
import Home from "@/components/product/src/app/page";
import { LanguageProvider } from "@/components/product/src/LanguageContext";
import Header from "@/components/product/src/layouts/Header";
import SideBar from "@/components/product/src/layouts/SideBar";
import Mainlayout from "@/layouts/MainLayouts";

import React, { useState } from "react";

export default function Farming() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    // <Mainlayout>
    // <Breadcrumb/>
    //     <FeaturesSection/>
    //     {/* <GrowingProcess/> */}
    //     {/* <StatsSection/> */}
    //     <Faq/>

    // </Mainlayout>

    <div className="">
      <LanguageProvider>
        <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        <div className="flex">
          <div className="w-fit">
            <SideBar
              isOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </div>
          <div className="w-full overflow-y-auto h-[calc(100vh-5rem)]">
            <Home />
          </div>
        </div>
      </LanguageProvider>
    </div>
  );
}
