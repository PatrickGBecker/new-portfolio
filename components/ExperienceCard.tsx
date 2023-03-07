import React from 'react'
import { motion } from 'framer-motion';
import { BsCameraReels, BsHeadphones} from 'react-icons/bs';
import { AiOutlineAudio } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RxMixerVertical } from 'react-icons/rx';
import { SiAdobepremierepro, SiAdobeaudition, SiAdobephotoshop } from 'react-icons/si'
import Profile from '../public/assets/profile.jpg';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#34597e] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{
                duration: 1.5,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src='https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/316043852_1721661444886085_7739550921123109701_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=eJ50XjdNeTwAX9cZvIq&_nc_ht=scontent-ord5-1.xx&oh=00_AfCdU7ylZO7gin8pYK4HZUc-Xv4ItmtCj4SoQgKkMqo5Ig&oe=640A720E'
            alt='Company Logo'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Frontend Software Developer</h4>
            <p className='font-bold text-2xl mt-1'>Self-Employed</p>
            <div className='flex space-x-2 my-2'>
                
            </div>
            <p className='uppercase py-5 text-[#a49746]'>From March 2022 to Present</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>I am the Bossman AND Cameraman</li>
                <li>I film people</li>
                <li>I record their sounds</li>
                <li>I make them look and sound better</li>
                <li>I show them how much better I made them</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard