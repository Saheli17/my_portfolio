import { assets } from '../assets/assets';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { SiHackerrank } from "react-icons/si";
import { motion } from "framer-motion";
import { FaSquareFacebook } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='w-11/12 max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4'>


      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <img src={assets.profile_img} alt='Profile' className='rounded-full w-24 sm:w-32' />
      </motion.div>


      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-3 font-Ovo mt-4'
      >
        Hi! I'm Saheli Gayen
        <img src={assets.hand_icon} alt='Wave' className='w-5 sm:w-6' />
      </motion.h3>


      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-Ovo'
      >
        Full Stack Developer
      </motion.h1>


      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-3xl text-sm sm:text-base md:text-lg mx-auto font-Ovo mt-4 px-2'
      >
        I’m a passionate web developer skilled in building responsive, user-friendly websites using HTML, CSS, JavaScript, React, and Node.js. I focus on writing clean, optimized code to solve real-world problems and improve user experience.
      </motion.p>


      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6"
      >
        <ul className="flex items-center gap-6 sm:gap-10 justify-center text-xl sm:text-2xl text-gray-700 dark:text-white">
          <li>
            <a href="https://github.com/Saheli17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <div className="p-2 rounded-full border-2 border-black dark:border-white hover:border-pink-400 hover:text-pink-400 dark:hover:border-pink-500 dark:hover:text-pink-500 transition duration-300">
                <FaGithub />
              </div>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/saheli-gayen-46b069333" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <div className="p-2 rounded-full border-2 border-black dark:border-white hover:border-pink-400 hover:text-pink-400 dark:hover:border-pink-500 dark:hover:text-pink-500 transition duration-300">
                <FaLinkedin />
              </div>
            </a>
          </li>
          {/* <li>
            <a href="https://www.hackerrank.com/profile/gayensaheli17" target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
              <div className="p-2 rounded-full border-2 border-black dark:border-white hover:border-pink-400 hover:text-pink-400 dark:hover:border-pink-500 dark:hover:text-pink-500 transition duration-300">
                  <SiHackerrank />
              </div>
            </a>
          </li> */}
          <li>
            <a href="https://www.facebook.com/profile.php?id=61573558538621" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <div className="p-2 rounded-full border-2 border-black dark:border-white hover:border-pink-400 hover:text-pink-400 dark:hover:border-pink-500 dark:hover:text-pink-500 transition duration-300">
                <FaSquareFacebook />
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/saheli_1708" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <div className="p-2 rounded-full border-2 border-black dark:border-white hover:border-pink-400 hover:text-pink-400 dark:hover:border-pink-500 dark:hover:text-pink-500 transition duration-300">
                <FaInstagram />
              </div>
            </a>
          </li>
        </ul>
      </motion.div>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href='#contact'
          className='px-8 py-2 sm:px-10 sm:py-3 border border-white rounded-full bg-black text-white dark:bg-transparent dark:text-white flex items-center gap-2 text-sm sm:text-base'
        >
          Contact me
          <img src={assets.right_arrow_white} alt='Arrow' className='w-4' />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href='/Resume_Saheli_Gayen.pdf'
          download
          className='px-8 py-2 sm:px-10 sm:py-3 border rounded-full border-gray-500 bg-white dark:text-black flex items-center gap-2 text-sm sm:text-base'
        >
          My resume
          <img src={assets.download_icon} alt='Download' className='w-4' />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
