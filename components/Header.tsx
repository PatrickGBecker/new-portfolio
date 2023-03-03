import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5  flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
            initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
             }}
             animate={{
                x: 0,
                opacity: 1,
                scale: 1,
             }}
             transition={{
                 duration: 1.5,
             }}
            className='flex flex-row items-center'>
            <SocialIcon url='https://www.youtube.com/channel/UCKqI5mujjZiEqceYtm01dbw' fgColor='#7aa0c7' bgColor='transparent' />
            <SocialIcon url='https://www.facebook.com/MichaelEverettVideography' fgColor='#7aa0c7' bgColor='transparent' />
            <SocialIcon url='https://www.instagram.com/michaeleverettvideography/' fgColor='#7aa0c7' bgColor='transparent' />
            <SocialIcon url='https://www.linkedin.com/in/michael-everett-0853b374' fgColor='#7aa0c7' bgColor='transparent' />
            <SocialIcon url='https://open.spotify.com/album/4AivcZTTUZF1nA6OyrwHdY?go=1&sp_cid=5bb0dd3a-b7df-4d54-a30b-8ee841bd9a03&utm_source=embed_player_p&utm_medium=desktop&nd=1' fgColor='#7aa0c7' bgColor='transparent' />
        </motion.div>
        
        <Link href='#contact'>
            <motion.div 
                initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center text-[#7aa0c7] cursor-pointer'>
                <SocialIcon 
                    className='cursor-pointer'
                    network='email'
                    fgColor='#7aa0c7'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-[#7aa0c7]'>Get In Touch</p>
            </motion.div>
        </Link>
    </header>
  )
}
