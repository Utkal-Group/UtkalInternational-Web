

import OurProducts from '@/components/product/src/components/product/OurProducts';
import Header from '@/components/product/src/layouts/Header'
import SideBar from '@/components/product/src/layouts/SideBar'
import { LanguageProvider } from '@/LanguageContext'
import React, { useState } from 'react'

export default function Products() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Toggle sidebar function
    const toggleSidebar = () => {
      setIsSidebarOpen((prev) => !prev);
    };
  return (
    <div>
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
      <OurProducts/>
       </div>
     </div>
   </LanguageProvider>
 </div>
  )
}
