import React from 'react';
import { HERO_CONTENT } from '../constants';
import profile from '../assets/output.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Frontend web developer', 'UI/UX designer'],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 50,
    });
     const container = (delay)=>({
        hidden: {x: -100, opacity: 0},
        visible:{
            x:0,
            opacity:1,
            transition: {duration: 0.5, delay:delay},
        }
        
     })

    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-8 min-h-screen'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                           variants={container(0)}
                           initial="hidden"
                           animate="visible"
                            className='pb-14 text-6xl font-thin tracking-tight lg:mt-16'>
                            TASEEM AKHTER ABBASI
                        </motion.h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            {text} <Cursor />
                        </span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.2}}
                        src={profile} alt="Profile of Taseem Akhter Abbasi" className='mt-6 rounded-2xl' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
