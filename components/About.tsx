import React from 'react'
import { motion } from 'framer-motion'
import aboutImage from '../public/assets/about-img.png';
import Image from 'next/image';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#85caff] text-2xl'>
          About
        </h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            viewport={{
                once: true
            }}
            src='https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/289021404_398415052255539_4449242724377168290_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=0yWRlur_YakAX8JAPdu&_nc_ht=scontent-ord5-1.xx&oh=00_AfDHdh6m1FE_NdFHxT6qfIFZAM4gQNAvRfR8QBMFx6xaaA&oe=6404A148'
            className='-mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is <span className='underline decoration-[#85caff]/40'>some</span>{" "}
            backstory
            </h4>
            <p className='text-base'>
                I'm Michael. I've been filming & editing video-content for over 15 years now. For the past 6 years, I've been recording & editing audio, too. My professional experience began in 2016 when I filmed Being Bossman for Youtube TV. I won a SAG award for Best Director. I was commissioned by God to engineer the audio for a groundbreaking poetry-punk band called Disinherited. We won 2 Grammy awards, but decided to melt the gold down, sell it, make swords out of it and slay evil ghosts. Hire me!
            </p>
        </div>
    </motion.div>
  )
}