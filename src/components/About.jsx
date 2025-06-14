import React, { useState } from 'react';
import { motion } from "framer-motion";
import { assets, infoList, toolsData } from '../assets/assets';
import { GraduationCap } from 'lucide-react';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiNodedotjs
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const About = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    {
      institute: "Kodalia Girls' High School (WBBSE)",
      duration: "Jan 2017 - Jul 2018",
      degree: "Secondary Education",
      score: "77.7%"
    },
    {
      institute: "Rajpur Vidyanidhi High School (WBCHSE)",
      duration: "Aug 2018 - Jul 2020",
      degree: "Higher Secondary Education",
      score: "78%"
    },
    {
      institute: "Muralidhar Girls' College (University of Calcutta)",
      duration: "Oct 2020 - Jul 2023",
      degree: "Bachelor of Science (B.Sc.)",
      score: "CGPA: 8.12"
    },
    {
      institute: "Future Institute of Engineering & Management (MAKAUT)",
      duration: "Aug 2023 - Present",
      degree: "MCA",
      score: "CGPA: 7.06"
    },
  ];

  const certificationData = [
    { name: "MERN Stack - Ejobindia", date: "(12/2024 - 5/2025)" },
    { name: "MERN Stack Development - Ardent", date: " (07/2024 - 09/2024) " },
    { name: "Web Development - TCES(Local Area)", date: "(07/2021 - 07/2023)" },
  ];

  const languagesData = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
     { name: "Tailwind CSS", icon:<RiTailwindCssFill />},
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Python", icon: <SiPython /> },
  ];

  return (
    <motion.div
      id='about'
      className='w-full px-[8%] py-14 scroll-mt-20 text-gray-800 dark:text-white'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-['Ovo']"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl font-['Ovo'] sm:text-5xl"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col lg:flex-row items-center gap-14 mt-1 lg:items-start'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-48 sm:w-64 md:w-80 rounded-3xl shrink-0 mt-12 '
        >
          <img
            src={assets.user_image}
            alt='user'
            className='w-full rounded-3xl'
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='flex-1'
        >
          <motion.p
            className="mb-4 max-w-2xl font-Ovo leading-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            I’m a motivated and responsible individual seeking opportunities to grow my skills and advance my career.
             </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='mt-1'
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='flex gap-6 mb-4 text-lg font-semibold'
            >
              {['education', 'certifications', 'techstack'].map(tab => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${activeTab === tab ? 'border-b-2 border-pink-500 text-pink-500 dark:text-pink-400' : 'text-gray-500 dark:text-gray-400'} pb-1 capitalize`}
                >
                  {tab}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "education" && (
                <motion.div className='relative ml-2 border-l-4 border-pink-400 dark:border-pink-500 pl-6'>
                  {educationData.map((item, i) => (
                    <motion.div
                      key={i}
                      className='mb-1.5 relative'
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <div className='absolute -left-[40px] top-1.5 w-8 h-8 rounded-full bg-red-100 dark:bg-pink-800 flex items-center justify-center'>
                        <GraduationCap size={16} />
                      </div>
                      <h3 className='font-bold text-lg'>{item.institute}</h3>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>{item.duration}</p>
                      <p className='mt-1'>{item.degree}</p>
                      <p className='text-sm'>📊 {item.score}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "certifications" && (
                <motion.div className='space-y-4'>
                  {certificationData.map((cert, i) => (
                    <motion.div
                      key={i}
                      className='border-l-4 border-pink-400 dark:border-pink-500 pl-4'
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <h3 className='font-medium'>{cert.name}</h3>
                      <p className='text-sm text-gray-500'>{cert.date}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "techstack" && (
                <motion.div className="space-y-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
                    <ul className="flex flex-wrap gap-4">
                      {languagesData.map((lang, i) => (
                        <motion.li
                          key={i}
                          className="w-24 h-24 flex flex-col items-center justify-center hover:-translate-y-1 duration-300 gap-1 bg-pink-200 dark:bg-pink-800 text-pink-600 dark:text-white rounded-lg text-2xl "
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          {lang.icon}
                          <p className="text-sm mt-1">{lang.name}</p>
                        </motion.li>

                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold mb-3">Tools</h3>
                    <ul className="flex flex-wrap gap-4">
                      {toolsData.map((tool, i) => (
                        <motion.li
                          key={i}
                          className="w-12 sm:w-14 h-12 sm:h-14 border rounded-lg flex items-center justify-center hover:-translate-y-1 duration-300"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          <img src={tool} alt="Tool" className="w-5 sm:w-7" />
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
