import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function Portfolio({}: Props) {
  const projects = [1, 2, 3, 4, 5];

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
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='hidden md:inline-flex absolute top-24 uppercase tracking-[20px] text-[#85caff] text-2xl'> 
            Portfolio
        </h3> 

        <h3 className='hidden md:inline-flex absolute top-36 uppercase tracking-[3px] text-sm'>
        Scroll right to view more projects
    </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#34597e] scrollbar-thumb-[#4a7eb3]'>
          {projects.map((project) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <motion.img 
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{
                  once: true,
                }}
                src='https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/287250572_394013612695683_1036923574212004292_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=DXYINr72mSsAX_b1lsK&_nc_ht=scontent-ord5-1.xx&oh=00_AfB83_GfqYfMPcEo8AzzkPrHpaccPET7mT8y71YXjJNeaQ&oe=64052074' alt='project image' 
              />
            
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#85caff]/90'>Photo-shoot</span> for Cassidy's fine ass
                </h4>

                <p className='text-lg text-center md:text-left'>
                  Lights, camera, shake dat phat booty! Bro, it was like juicin' an orange with your face. I seriously learned a lot about camera angles, lighting and microphone placement so that the cheek claps didn't blow out yer eardrums. 
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#34597e]/10 left-0 h-[500px] -skew-y-12'>

        </div>
    </motion.div>
  )
}

export default Portfolio