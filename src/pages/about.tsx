import About from '@/components/Aboutus/about'
import About1 from '@/components/Aboutus/about1'
import AboutComany from '@/components/Aboutus/AboutComany'

import Faq from '@/components/Aboutus/Faq'
import MainLayouts from '@/layouts/MainLayouts'
import React from 'react'

export default function about() {
  return (
    <MainLayouts>
        <About/>
        <AboutComany/>
        <About1/>
        <Faq/>
      
    </MainLayouts>
  )
}
