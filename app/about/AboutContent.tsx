import Image from 'next/image'

const skills = ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Node.js', 'Next.js', 'TypeScript', 'JavaScript', 'MongoDB', 'PostgreSQL', 'MySQL', 'Prisma ORM', 'AWS'];

export default function AboutContent() {
  return (
    <section className="bg-[url('/white_bg.png')] bg-cover bg-no-repeat py-20 dark:bg-none dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-48 h-48 relative">
            <Image
              src="/prof.png"
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Joshua Sedigo</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I&apos;m a passionate web developer with 3 years of experience in front-end development and 1 year in back-end development, specializing in creating modern, responsive web applications. My expertise includes React, Next.js, Node.js, and a variety of other technologies within the JavaScript ecosystem.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When I&apos;m not coding, I enjoy exploring new technologies and keeping up with the latest trends in the tech world, or enjoying hobbies like gaming, reading, and studying.
            </p>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Skills</h4>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <li key={skill} className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}