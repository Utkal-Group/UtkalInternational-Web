import React from 'react'
import { ReactElement, useState } from "react";
import Header from './Header'
import Footer from './Footer';
import Head from 'next/head';

// import Footer from './Footer';
// import { image } from '@/assests/Home';
// import ResponsiveNaveBar from './Responsivenav';





type Prop = {
    title?: string;
    children: ReactElement | ReactElement[];
  
  };
export default function Mainlayout( { children, title = "" }: Prop) {
  return (

    <>
  <Head>
    <meta property='og:image' content='./logos.png' />
    <meta property='og:URL' content='https://utkalinternational.com/' />

        <link rel="icon" href="./logos.png"></link>
    </Head>
        <Header/>
     
      
        <>{children}</>
        
        
        <Footer/>
       
       
      </> 
    
  )
}