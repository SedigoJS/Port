'use client';

import React from "react";
import Image from "next/image";

interface EducProps {
  hoveredSection: string;
  setHoveredSection: (key: string) => void;
}

const Educ: React.FC<EducProps> = ({ hoveredSection, setHoveredSection }) => {
  const educationData = [
    {
      level: "High School",
      school: "National Christian Life College (NCLC)",
      years: "2019 - 2021",
      logo: "/nclc.png",
      hoverKey: "highSchool",
    },
    {
      level: "College",
      school: "Institute of Creative Computer Technology (ICCT)",
      years: "2021 - 2024",
      logo: "/icct.png",
      hoverKey: "college",
    },
    {
      level: "Elementary",
      school: "Guitnang Bayan Elementary School (GBES)",
      years: "2009 - 2015",
      logo: "/gbes.png",
      hoverKey: "elementary",
    },
  ];

  return (
    <div className="dark:bg-none dark:bg-gray-800 relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 py-10 sm:py-10">
      <h1
        className={`${
          hoveredSection ? "text-white" : ""
        } text-black dark:text-white text-3xl sm:text-4xl md:text-4xl font-extrabold text-center mb-8 sm:mb-12`}
      >
        Educational Background
      </h1>

      <div className="dark:text-white w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-45 p-4 sm:p-6 rounded-lg shadow-xl text-center transform transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredSection(edu.hoverKey)}
            onMouseLeave={() => setHoveredSection("")}
          >
            <div className="mb-4 flex justify-center">
              <Image
                height={120}
                width={120}
                src={edu.logo}
                alt={`${edu.level} Logo`}
                className="rounded-full"
              />
            </div>
            <h2 className="text-black dark:text-white text-xl sm:text-2xl font-semibold mb-2">
              {edu.level}
            </h2>
            <p className="text-black dark:text-white text-base sm:text-lg">{edu.school}</p>
            <p className="text-sm text-gray-600 dark:text-gray-200 mt-2">
              {edu.years}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educ