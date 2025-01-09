'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [opacity, setOpacity] = useState(1)
  const [leftPosition, setLeftPosition] = useState(37)
  const [rightPosition, setRightPosition] = useState(-50)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to check screen size
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check
    updateScreenSize();

    // Add event listener for screen resizing
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeStart = windowHeight * 0.1; // Start fading when 10% of the hero is scrolled
      const fadeEnd = windowHeight * 0.5; // Fully faded when 50% of the hero is scrolled
    
      // Calculate opacity
      const newOpacity = 1 - Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      setOpacity(newOpacity);
    
      const baseLeftPosition = isMobile ? -45 : 37;
      const newLeftPosition = baseLeftPosition - (60 * (1 - newOpacity));
      setLeftPosition(newLeftPosition);
    
      // Calculate right position dynamically
      const baseRightPosition = isMobile ? -250 : -50; // Adjust for mobile or desktop
      const newRightPosition = baseRightPosition + (60 * (1 - newOpacity));
      setRightPosition(newRightPosition);
    };    

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Parallelogram background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-400 to-white dark:bg-gradient-to-br dark:from-purple-500 dark:via-pink-500 dark:to-blue-900"
        style={{
          transform: 'skew(-70deg)',
          left: `${leftPosition}%`,
          right: `${rightPosition}%`,
        }}
      />

      {/* Content */}
      <div 
        className="relative z-10 flex items-center justify-center min-h-screen"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black dark:text-white">
          <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Welcome to My Portfolio
          </h2>
          <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
          Highlighting my top web development projects and demonstrating my expertise in building dynamic, user-friendly applications. Explore my portfolio to see how I transform ideas into seamless, high-performance digital experiences
          </p>
        </div>
      </div>
    </section>
  )
}
