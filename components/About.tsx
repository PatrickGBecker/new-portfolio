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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#eeb343] text-2xl'>
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
            src='https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/315955050_1721661808219382_1055463927895982043_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=EbsWkd_PbbUAX-ULiPl&_nc_ht=scontent-ord5-1.xx&oh=00_AfDG9qc6TIoukJfQXvdLj8f-pbRmYrc6RGUGPeZsBVwHxg&oe=640AA016'
            className='-mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#a49746]/80'>little</span>{" "}
            backstory
            </h4>
            <p className='text-base'>
                I grew up drawing, acting and reading everything I could. As a young professional I loved working in the hospitality industry because I got to take care of people and share the city’s many experiences to be had with them. As I matured and was promoted to Revenue Analyst, I was successful and got to exercise my logical abilities, but did not receive the rewards of creativity or of being social. I knew I needed to make a change. Luckily, I was furloughed during the 2020 Pandemic Lockdown. Several friends had gone to the Turing School of Software & Design and loved the experience. Since I had experience with graphic design, data analytics and leading a diverse team toward a common goal, the tech industry seemed like the perfect move! Now that I’ve graduated from Turing, I feel empowered to be a part of such an inclusive, intelligent and challenging industry. It blends my creative skills and strategic thinking with my love for collaboration. I am looking forward to whatever comes next. 
            </p>
        </div>
    </motion.div>
  )
}