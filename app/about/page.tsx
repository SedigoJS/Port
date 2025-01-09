'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutContent from './AboutContent'
import Educ from './Educ'

export default function About() {
  const [hoveredSection, setHoveredSection] = useState("");
  const [move, setMove] = useState(false);

  const getBackground = () => {
    switch (hoveredSection) {
      case "highSchool":
        return "bg-[url('/nclcbg.png')]";
      case "college":
        return "bg-[url('/icctbg.png')]";
      case "elementary":
        return "bg-[url('/gbesbg.png')]";
      default:
        return "bg-[url('/white_bg.png')] dark:bg-gray-900";
    }
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        setMove(true);
      }, 200);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className={`min-h-screen bg-cover bg-fixed bg-no-repeat ${getBackground()} transition-all duration-500`}>
      <Header />
      <main className={`transition-all duration-700 ease-linear ${move ? "translate-x-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
        <AboutContent />
        <Educ hoveredSection={hoveredSection} setHoveredSection={setHoveredSection} />
      </main>
      <Footer />
    </div>
  )
}