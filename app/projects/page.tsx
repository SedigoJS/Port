'use client'

import { ExternalLink, Github } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'LMS x AAI',
    description: 'An online learning management system where teachers or administrators can create and manage course modules, lessons, and quizzes for students. The platform allows students to access educational content, complete quizzes, and track their progress.',
    image: '/p1.png',
    github: 'https://github.com/SedigoJS/LMS',
    live: 'https://example.com',
  },
  {
    id: 2,
    title: 'Surf x Bini',
    description: 'A content management system (CMS) website where users can submit entries, and an admin interface is used to review and validate these submissions. The admin site offers tools for reviewing, approving, or rejecting entries based on predefined criteria, ensuring that content meets the necessary standards. Once validated, the approved entries are forwarded to the brand responsible for awarding prizes.',
    image: '/p2.png',
    github: 'https://github.com/SedigoJS/Bini-Con',
    live: 'https://example.com',
  },
  {
    id: 3,
    title: 'CloudCast',
    description: 'A weather dashboard integrates the OpenWeatherMap API to provide real-time weather updates, including current conditions such as temperature, humidity, and forecasts, alongside weather-related icons. Users can check the weather for their location or any city they choose. Additionally, the dashboard incorporates a music API, like Spotify or Apple Music.',
    image: '/p3.png',
    github: 'https://github.com/SedigoJS/CloudCast',
    live: 'https://example.com',
  },
  {
    id: 4,
    title: 'Randomizer',
    description: 'A tool similar to a Google Spin Wheel, allowing users to upload entries through files, such as CSVs, and randomly select winners. Users can easily input a list of participants or entries from a file, and the system randomly selects one or more winners from the list.',
    image: '/p4.png',
    github: 'https://github.com/SedigoJS/Randomizer',
    live: 'https://example.com',
  },
]

export default function ProjectsGrid() {
  const [opacity, setOpacity] = useState(1)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const fadeStart = windowHeight * 0.5 // Start appearing when 50% of the page is scrolled
      const fadeEnd = windowHeight * 1.0 // Fully appeared when 100% of the page is scrolled
      const newOpacity = Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1)
      setOpacity(newOpacity)
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])  
  

  return (
    <section id="projects" style={{ opacity }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">Projects :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <Image width={1000} height={1000} src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200">
                    <Github className="w-5 h-5 mr-1" />
                    GitHub
                  </Link>
                  <Link href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200">
                    <ExternalLink className="w-5 h-5 mr-1" />
                    {project.id === 3 ? 'Go to Project' : 'Live Demo'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

