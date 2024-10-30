import React from 'react'
import image from '../assets/dosri.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
// this is test

const About = () => {
  return (
   <div className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl'>
        About 
        <span className='text-neutral-600'>Me</span>
    </h1>
    <div className='flex flex-wrap'>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2 lg:p-8'>
        <div className='mr-14 flex items-center justify-center'>
            <img src={image} alt="" className='rounded-2xl'/>
        </div>
        </motion.div>
        <motion.div
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:100}}
         transition={{duration:0.5}}
        
        className='w-full lg:w-1/2'>
        <div className='justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{ABOUT_TEXT}
            <span className="font-semibold text-xl text-purple-600">COMPUTER SYSTEM ENGINEER</span>
            {` who loves working with robots and building websites. I'm on the lookout for a job where I can use my skills to solve problems and make cool things happen. I want to work with a team to create awesome robotic systems and user-friendly websites that make life easier for people.`}
            </p>
            <h1 className='text-center font-semibold underline'>Education</h1>
            <div className='flex flex-wrap mt-4 ' >
                <div className='items center' >
                    <p>Bsc.Computer system Engineering (HEC & PEC)</p>
                    <h6 className='mb-3'>(2020-2024)</h6>
                    <p>Fsc Pre-Engineering</p>
                    <h6 className='mb-3'>(2017-2018)</h6>
                    <p>Mtric Science</p>
                    <h6 className='mb-3'>(2015-2016)</h6>
                </div>
                <div className='items-center ml-10'>
                    <h2 className='mb-7' >3.6CGBA</h2>
                    <h2 className='mb-7'>81%</h2>
                    <h2 className='mb-7'>88%</h2>
                </div>
            </div>

        </div>

        </motion.div>
        

    </div>
   </div>
  )
}

export default About