'use client'

import React, { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface ProjectImage {
  src: string
  alt: string
}

interface ProjectData {
  title: string
  description: string
  images: ProjectImage[]
}

const sampleProject: ProjectData = {
  title: "Randomizer",
  description: "A tool similar to a Google Spin Wheel, allowing users to upload entries through files, such as CSVs, and randomly select winners. Users can easily input a list of participants or entries from a file, and the system randomly selects one or more winners from the list.",
  images: [
    { src: "/p4-7.png", alt: "pic" },
    { src: "/p4-1.png", alt: "pic" },
    { src: "/p4-2.png", alt: "pic" },
    { src: "/p4-5.png", alt: "pic" },
    { src: "/p4-6.png", alt: "pic" },
    { src: "/p4.png", alt: "pic" },
    { src: "/p4-4.png", alt: "pic" },
  ]
}

const ProjectPresentation: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const project = sampleProject

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    )
  }, [project.images.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }, [project.images.length])

  return (
    <Card className="w-full max-w-5xl mx-auto pt-10 h-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold dark:text-white">{project.title}</CardTitle>
        <CardDescription className="text-lg mt-2 dark:text-white">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Image 
            src={project.images[currentImageIndex].src} 
            alt={project.images[currentImageIndex].alt}
            className="w-full h-full object-cover rounded-md"
            width={1000}
            height={1000}
          />
          <Button 
            className="absolute h-full w-1/2 left-2 top-1/2 transform -translate-y-1/2"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="absolute h-4 w-4 left-0" />
          </Button>
          <Button 
            className="absolute h-full w-1/2 right-2 top-1/2 transform -translate-y-1/2"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="absolute right-0 h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center mt-4">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectPresentation