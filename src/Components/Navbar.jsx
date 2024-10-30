import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/download.jpg'
const Navbar = () => {
  return (
  
   <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className='h-24 mx-auto' src={logo} alt="" />
    </div>
    <div className='flex items-center justify-center gap-4 m-8 text-2xl'>

    <a href="https://www.linkedin.com/in/taseem-akhter-abbasi-02995a29a/" target="_blank" >
    <FaLinkedin />
    </a>
    <a href="https://github.com/Taseem-akhter-abbasi/" target="_blank" >
        <FaGithub/>
      </a>
        <FaSquareXTwitter/>
        <a href='https://www.instagram.com/jugnoo271?igsh=MWpvaXh5cDM4YW15MQ=='>
        <FaInstagram/>
        </a>
    </div>

   </nav>
   
  )
}

export default Navbar