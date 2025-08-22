import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LanguageProvider } from "@/LanguageContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <LanguageProvider>
   <Component {...pageProps} />
   </LanguageProvider>
  )
}
