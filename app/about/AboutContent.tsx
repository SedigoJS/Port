import Image from 'next/image'
import { Mail, Phone, MapPin, Cake } from 'lucide-react'

const skills = ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Node.js', 'Next.js', 'TypeScript', 'JavaScript', 'MongoDB', 'PostgreSQL', 'MySQL', 'Prisma ORM', 'AWS']

export default function AboutContent() {
  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">About Me</h2>
        <div className="flex flex-col items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12'>
            <div className="w-48 h-48 relative ml-0 md:ml-20">
              <Image
                src="/prof.png"
                alt="Profile picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className=" w-full md:w-2/3 p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="size-9 sm:size-6 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-base text-gray-900 dark:text-white">sedigojs<wbr />@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Cake className="w-6 h-6 text-purple-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Date of Birth</p>
                    <p className="text-base text-gray-900 dark:text-white">June 18, 2003</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="sm:size-12 md:size-12 size-20 text-red-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-base text-gray-900 dark:text-white">#308 GSIS Rd. GB1 San Mateo, Rizal 1850 Philippines</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-base text-gray-900 dark:text-white">(+63) 928 681 9047</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 md:gap-0">
            <div className='space-y-4 mt-14'>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Joshua Sedigo</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I&apos;m a passionate web developer with 3 years of experience in front-end development and 1 year in back-end development, specializing in creating modern, responsive web applications. My expertise includes React, Next.js, Node.js, and a variety of other technologies within the JavaScript ecosystem.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When I&apos;m not coding, I enjoy exploring new technologies and keeping up with the latest trends in the tech world, or enjoying hobbies like gaming, reading, and studying.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Skills</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
                {skills.map((skill) => (
                  <li key={skill} className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
