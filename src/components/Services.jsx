import { assets, serviceData } from '../assets/assets'

import { motion } from "motion/react"
const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
         className="text-center mb-2 text-lg font-['Ovo']">What I offer</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-['Ovo']">My Services</motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-['Ovo']">nkjdefjbsdj</motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:bg-[#fcf4ff] cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:hover:bg-darkHover dark:hover:shadow-white ' key={index}>
            <img className='w-10' src={icon} alt={title} />
            <h3 className='my-4 text-lg text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-gray-600 text-sm leading-5 dark:text-white/80'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read more <img src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} className='w-4' alt='' />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

  )
}

export default Services