import React from 'react'
import Hero from './components/home/Hero'
import Organizations from './components/home/Organizations'
import Projects from './components/home/Projects'
import { Certificate } from 'crypto'
import Certifications from './components/home/Certifications'
import Testimonials from './components/home/Testimonials'
import ResumeDownload from './components/download/ResumeDownload'

const page = () => {
  return (
    <div>
      <Hero />
      <Organizations />
      <Projects />
      <Certifications />
      <ResumeDownload />
      <Testimonials />
    </div>
  )
}

export default page