import React, { useRef, useState, useEffect } from 'react'
import { assets } from '../assets/assets' // assumes alias is configured
import { motion, AnimatePresence } from 'framer-motion';
const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setScroll] = useState(false);
    const sidemenuREf = useRef();
    const openMenu = () => {
        sidemenuREf.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sidemenuREf.current.style.transform = 'translateX(16rem)'
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <img src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white} bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href='#top'>
                    <img src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-28 cursor-pointer mr-14' />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50 dark:border dark: border-white/50 dark:bg-transparent"}`}>
                    <li><a className="font-Ovo" href='#top'>Home</a></li>
                    <li><a className="font-['Ovo']" href='#about'>About me</a></li>
                    {/* <li><a className="font-['Ovo']" href='#services'>Services</a></li> */}
                    <li><a className="font-['Ovo']" href='#work'>My Work</a></li>
                    <li><a className="font-['Ovo']" href='#contact'>Contact me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    {/* <button onClick={() => setIsDarkMode(prev => !prev)}>
                       <img src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' 
                       className="w-6 transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12"
 />
                    </button> */}
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={isDarkMode ? 'sun' : 'moon'}
                                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                                alt=""
                                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ duration: 0.3 }}
                                className="w-6 cursor-pointer"
                            />
                        </AnimatePresence>
                    </button>

                    <motion.a 
                    whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
                    href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact<img src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' /></motion.a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <img src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>
                {/*---------------- mobile menu -------------*/}
                <ul ref={sidemenuREf} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <img src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a className="font-['Ovo']" href='#top'>Home</a></li>
                    <li><a className="font-['Ovo']" onClick={closeMenu} href='#about'>About me</a></li>
                    {/* <li><a className="font-['Ovo']" onClick={closeMenu} href='#services'>Services</a></li> */}
                    <li><a className="font-['Ovo']" onClick={closeMenu} href='#work'>My Work</a></li>
                    <li><a className="font-['Ovo']" onClick={closeMenu} href='#contact'>Contact me</a></li>

                </ul>
            </nav>
        </>
    );
};

export default Navbar;
