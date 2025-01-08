"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PortfolioContact() {
  const [move, setMove] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitResult('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitResult('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitResult('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setMove(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const contactItems = [
    {
      href: "https://www.facebook.com/sedigo.joshua",
      src: "/contact_logo1.png",
      alt: "Facebook logo",
      text: "Facebook", 
      hoverBg: "bg-[url('/fb.png')] dark:bg-none dark:hover:bg-[url('/fb.png')] hover:text-white",
      hoverIcon: "bg-blue-700 dark:bg-transparent hover:bg-blue-800 dark:hover:bg-blue-600"
    },
    {
      href: "mailto:sedigojs@gmail.com",
      src: "/contact_logo2.png",
      alt: "Gmail logo",
      text: "Email",
      hoverBg: "bg-[url('/gmail.png')] dark:bg-none dark:hover:bg-[url('/gmail.png')] dark:hover:text-white",
      hoverIcon: "bg-red-700 dark:bg-transparent hover:bg-red-800 dark:hover:bg-red-600"
    },
    {
      href: "viber://chat?number=%2B639286819047",
      src: "/contact_logo3.png",
      alt: "Viber logo",
      text: "Viber",
      hoverBg: "bg-[url('/viber.png')] dark:bg-none dark:hover:bg-[url('/viber.png')] dark:hover:text-white",
      hoverIcon: "bg-purple-700 dark:bg-transparent hover:bg-purple-800 dark:hover:bg-purple-600"
    },
    {
      href: "https://github.com/SedigoJS",
      src: "/contact_logo4.png",
      alt: "Github logo",
      text: "GitHub",
      hoverBg: "bg-[url('/github.png')] dark:bg-none dark:hover:bg-[url('/github.png')] dark:hover:text-white",
      hoverIcon: "bg-white dark:bg-transparent hover:bg-gray-300 dark:hover:bg-white"
    },
  ];

  return (
    <footer className="bg-[url('/white_bg.png')] bg-cover bg-no-repeat dark:bg-gradient-to-b from-gray-900 to-black dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      <section className="pb-10 md:pb-44">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submitResult && (
              <div className={`mt-4 text-sm ${submitResult.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
                {submitResult}
              </div>
            )}
          </form>
        </div>
      </section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <div
              className={`w-full max-w-md mx-auto space-y-4 transition-all duration-700 ease-linear ${
                move ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group pl-5 h-16 w-full rounded-full flex items-center ${item.hoverBg} hover:bg-cover transition-all duration-300 bg-gray-800 bg-opacity-50`}
                >
                  <Image
                    className="h-8 w-8 rounded-full mr-3"
                    src={item.src}
                    alt={item.alt}
                    width={32}
                    height={32}
                  />
                  <p className="text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-8 md:mt-0">
            <div
              className={`w-full max-w-md flex flex-col justify-center items-center transition-all duration-700 ease-linear ${
                move ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <Image
                className="w-40 h-40 sm:w-52 sm:h-52 rounded-full mb-6"
                src="/prof.png"
                alt="Profile picture"
                width={208}
                height={208}
              />
              <h3 className="text-2xl font-bold mb-2">Joshua Sedigo</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-6">Fullstack Web Developer</p>
              <div className="flex space-x-4">
                {contactItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${item.hoverIcon} transition-all duration-300 bg-gray-800 bg-opacity-50`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-center mt-24">
        <p className="text-sm text-black dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300">
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
        <p className="mt-4 text-xs text-black dark:text-gray-500">
          Built with 💻 and passion. Powered by{" "}
          <span className="text-blue-500 font-semibold">Next.js</span> and{" "}
          <span className="text-cyan-500 font-semibold">Tailwind CSS</span>.
        </p>
      </section>
    </footer>
  );
}