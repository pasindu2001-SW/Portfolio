import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from "next/image";
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div 
    initial={{ opacity: 0}} 
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ delay:0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-ovo'>Most recent work</motion.h4>

        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ delay:0.3, duration: 0.5 }}
         className='text-center text-5xl font-ovo'>Projects</motion.h2>

        <motion.div
        initial={{ opacity: 0}} 
        whileInView={{ opacity: 1 }}
        transition={{ delay:0.9, duration: 0.6 }}
         className='grid my-10 gap-5' style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {workData.map((project, index) => (
                <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                 key={index}
                 href={project.link}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lf relative cuursor-pointer group'
                 style={{backgroundImage:`url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                    py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center 
                    justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5' />
                    </div>
                    </div>
                    
                </motion.a>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Work