'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push('/');
  
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      smoothScrollToElement(projectsSection, 1500); // Adjust duration (2000 ms = 2 seconds)
    }
  
    if (menuOpen) {
      setMenuOpen(false);
    }
  };
  
  function smoothScrollToElement(element: HTMLElement, duration: number = 1000) {
    const start = window.scrollY;
    const end = element.offsetTop;
    const distance = end - start;
    let startTime: number | null = null;
  
    // Easing function for smooth scroll
    function ease(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
  
    function scroll(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easingProgress = ease(progress);
  
      window.scrollTo(0, start + easingProgress * distance);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    }
  
    requestAnimationFrame(scroll);
  }
  

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer" onClick={() => window.location.reload()}>Joshua S.</h1>
          
          <button onClick={toggleMenu} className="lg:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {menuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-white" />}
          </button>
          
          <nav className={`${menuOpen ? 'block' : 'hidden'} hidden lg:block`}>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
              <li><Link href="/" className="text-gray-600 hover:text-blue-900 dark:text-gray-300 dark:hover:text-white">Home</Link></li>
              <li><a href="#projects" onClick={scrollToProjects} className="text-gray-600 hover:text-blue-900 dark:text-gray-300 dark:hover:text-white">Projects</a></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-900 dark:text-gray-300 dark:hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-900 dark:text-gray-300 dark:hover:text-white">Contact</Link></li>
            </ul>
          </nav>

          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>
        </div>

        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-2`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
            <li><Link href="/" className="text-gray-600 hover:text-blue-900 dark:text-gray-300 dark:hover:text-white">Home</Link></li>
            <li><a href="#projects" onClick={scrollToProjects} className="text-gray-600 hover:text-blue-900 dark:text-gray-300 dark:hover:text-white">Projects</a></li>
            <li><Link href="/about" className="text-gray-600 hover:text-blue-900 dark:text-gray-300 dark:hover:text-white">About</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-blue-900 dark:text-gray-300 dark:hover:text-white">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}