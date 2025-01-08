import Link from "next/link";
import { Github, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Joshua Sedigo</h3>
            <p className="mt-2">Full Stack Web Developer</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/joshua-sedigo-463bb2341" target="/" className="hover:text-indigo-400 transition duration-300"><Linkedin/></Link>
            <Link href="https://github.com/SedigoJS" target="/" className="hover:text-indigo-400 transition duration-300"><Github/></Link>
            <Link href="https://www.facebook.com/sedigo.joshua" target="/" className="hover:text-indigo-400 transition duration-300"><Facebook/></Link>
          </div>
        </div>
        <section className="text-center mt-3 md:mt-0">
          <p className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/SedigoJS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline hover:text-blue-400 transition-colors duration-300"
            >
              Joshua Sedigo
            </a>
            . All rights reserved.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            Built with 💻 and passion. Powered by{" "}
            <span className="text-blue-500 font-semibold">Next.js</span> and{" "}
            <span className="text-cyan-500 font-semibold">Tailwind CSS</span>.
          </p>
        </section>
      </div>
    </footer>
  )
}

