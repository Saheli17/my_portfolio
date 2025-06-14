import { assets } from '../assets/assets'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { SiHackerrank } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <img src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto'>
          <img src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail' className='w-6' />
          gayensaheli17@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Saheli Gayen.All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 text-2xl text-gray-700 dark:text-white">
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
      </div>
    </div>
  )
}

export default Footer
