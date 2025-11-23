import React from 'react'
import Image from "next/image";
import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from "motion/react"


const About = ({isDarkMode}) => {
  return (
    <motion.div id="about" className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
         className='text-center mb-2 text-lg font-ovo'>Introduction</motion.h4>

        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
         className='text-center text-5xl font-ovo'>About me</motion.h2>

        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.8}}
         className='flex w-full flex-col items-center gap-20 my-20'>
            
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.6, delay: 0.8}}
             className='flex-1'>
                <p className='mb-10 max-w-2xl font-ovo'>
                    I am an undergraduate student pursuing a BSc (Hons) in Software Engineering at SLTC Research University. I have mostly worked with JavaScript,
                     and I also possess knowledge in web development, UI/UX design, database management, and various frameworks.
                </p>

                <motion.ul
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.8, delay: 0.1 }}
                 className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <motion.li 
                        whileHover={{scale:1.05}}
                        className="relative border border-gray-300 rounded-xl p-6 cursor-pointer
                            transition-all duration-500 ease-out
                            hover:bg-[var(--color-light-hover)]
                             hover:shadow-purple-300/50
                            hover:-translate-y-2 hover:scale-105
                            group hover:shadow-[var(--boxshadow-black)]" key={index}>

                            
                            <span className="
                                    absolute inset-0 rounded-xl hover:bg-[var(--color-light-hover)]
                                    opacity-0 group-hover:opacity-100 blur-xl transition duration-500
                            " />

                            <div className="relative z-10 transform transition-transform duration-500 group-hover:rotate-1 group-hover:-rotate-y-3 group-hover:scale-105">
                                    <Image src={icon} alt={title} className="w-6 inline-block" />
                                    <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                                    <div className="text-gray-600 text-sm">{description}</div>
                            </div>
                        </motion.li>

                    ))}
                </motion.ul>

                <motion.h4 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className='my-6 text-gray-700 text-center font-ovo'>Tools I use</motion.h4>

                <motion.ul 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ delay: 1.3, duration: 0.5 }}
                className='flex justify-center gap-4 sm:gap-6'>
                    {toolsData.map((tool, index) => (
                        <motion.li
                        whileHover={{ scale: 1.1 }}
                         className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-2 hover:scale-105
                            group duration-500'
                         key={index}>
                            <Image src={tool} alt='Tool' width={40} height={40} className='w-5 sm:w-7 object-contain '/>
                        </motion.li>
                    ))}
                </motion.ul>

            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About