import React, { useContext } from 'react';
import { LanguageContext } from "@/LanguageContext";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { footer, logo } from '@/assests/Home';
import { footerData } from '@/utils/mainPage';

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const currentFooterData = footerData.find(item => item.lang === language) || footerData[0];

  return (
    <footer
      className="main-container bg-cover bg-center bg-no-repeat text-gray-300 py-10"
      style={{ backgroundImage: `url(${footer.src})` }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 mt-7">
        {/* Column 1: Logo and Description */}
        <div>
          <img src={logo.src} alt="Logo" className="flex mb-4 w-auto h-20 items-center" />
          <ul className="space-y-2">
            <li className="flex items-start">
              <LocationOnIcon className="w-5 h-5 text-white" />
              {currentFooterData.address1}
            </li>
            <li className="flex items-start">
              <LocationOnIcon className="w-5 h-5 text-white" />
              {currentFooterData.address2}
            </li>
            <li className="flex items-center">
              <HeadphonesIcon className="w-5 h-5 text-white mr-2" />
              {currentFooterData.phone}
            </li>
            <li className="flex items-center">
              <EmailIcon className="w-5 h-5 text-white mr-2" />
              {currentFooterData.email}
            </li>
          </ul>
        </div>

        {/* Column 2: Products */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">{currentFooterData.productsHeader}</h3>
          <ul className="space-y-8">
            {currentFooterData.products.map((product, index) => (
              <li key={index}>
                <a href={product.path} className="text-gray-300 hover:underline">
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Need Help? */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">{currentFooterData.needHelpHeader}</h3>
          <p className="text-white">{currentFooterData.phone}</p>
          <p className="text-white">{currentFooterData.email}</p>
        </div>

        {/* Column 4: Follow Us & Social Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">{currentFooterData.followUs}</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61567640396138" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="text-gray-300 hover:text-blue-600 w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/company/104864526/admin/notifications/all/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="text-gray-300 hover:text-blue-700 w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/utkal_international/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="text-gray-300 hover:text-pink-500 w-8 h-8" />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
