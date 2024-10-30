import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { PiFileCssBold } from "react-icons/pi";
import { TbBrandJavascript } from "react-icons/tb";
// import { TbTailwind } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import img from '../assets/talwind.png';
import { TbBrandFramerMotion } from "react-icons/tb";
import gsap from '../assets/gsap.png'
import { animate, motion } from 'framer-motion';

const Technologies = () => {
  const container = (duration)=>({
    initial: {y: -10},
    animate:{
      y:[10,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat: Infinity,
        repeatType:"reverse",
      }
    }
    
 })
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:-100}}
       transition={{duration:1.5}}
     
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:0.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={container(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4 text-cyan-400'>
          <RiReactjsLine className='text-6xl' />
        </motion.div>
        <motion.div 
        variants={container(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4 text-cyan-400'>
          <img src={img} alt="" className='w-16' />
        </motion.div>
        <motion.div
        variants={container(3.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4 text-yellow-500'>
          <TbBrandFramerMotion className='text-6xl' />
        </motion.div>
        <motion.div
        variants={container(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4 text-cyan-400'>
          <img src={gsap} alt="" className='w-16' />
        </motion.div>
        <motion.div
        variants={container(4.5)}
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4 text-yellow-500'>
          <TiHtml5 className='text-6xl' />
        </motion.div>
        <motion.div 
        variants={container(5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4 text-blue-500'>
          <TbBrandJavascript className='text-6xl' />
        </motion.div>
        <motion.div
        variants={container(5.5)}
        initial="initial"
        animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4 text-red-600'>
          <PiFileCssBold className='text-6xl' />
        </motion.div>
        <motion.div 
        variants={container(5.7)}
        initial="initial"
        animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4 text-white'>
          <FaGithub className='text-6xl' />
        </motion.div>
        {/* <div className='rounded-2xl border-4 border-neutral-800 p-4 text-cyan-400'>
          <TbTailwind className='text-7xl' />
        </div> */}
      </motion.div>
    </div>
  );
};

export default Technologies;
