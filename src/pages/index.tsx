
import { Inter } from "next/font/google";
import Mainlayouts from "@/layouts/MainLayouts";
import Welcome from "@/components/Home/welcome";
import Choose from "@/components/Home/Choose";
import Gallery from "@/components/Home/Gallery";
import Bg from "@/components/Home/Bg";
import Feedback from "@/components/Home/Feedback";
import Blog from "@/components/Home/Blog";
import Slider from "@/components/Home/Slider";
import CardsRow from "@/components/Home/Blog";
import AboutUs from "@/components/Home/Gallery";
import HomeSlider from "@/components/Home/Slider";
import AboutComany from "@/components/Aboutus/AboutComany";












const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Mainlayouts>
     <HomeSlider/>
      {/* <Slider/> */}
      <AboutComany/>
      <Welcome/>
      <Choose/>
      {/* <Gallery/> */}
      {/* <Bg/> */}
      <Feedback/>
      {/* <Blog/> */}
      <CardsRow/>
      <AboutUs/>
      
   
      

    </Mainlayouts>
  )
}