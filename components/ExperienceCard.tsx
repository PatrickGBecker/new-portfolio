import React from 'react'
import { motion } from 'framer-motion';
import { BsCameraReels, BsHeadphones} from 'react-icons/bs';
import { AiOutlineAudio } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RxMixerVertical } from 'react-icons/rx';
import { SiAdobepremierepro, SiAdobeaudition, SiAdobephotoshop } from 'react-icons/si'

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
            src='https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/306321191_472923701516788_1036067590155672267_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wiix7Tn6rJQAX80XrMD&_nc_ht=scontent-ord5-1.xx&oh=00_AfDxnait8cS1UU7KDIfOBlT5VJtm40vGe5cyK_sSq_f3yg&oe=640528BE'
            alt='Company Logo'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of Cerulean Media</h4>
            <p className='font-bold text-2xl mt-1'> at Cerulean Media, LLC.</p>
            <div className='flex space-x-2 my-2'>
                <BsCameraReels className='h-10 w-10' />
                <AiOutlineAudio className='h-10 w-10' />
                <FiEdit className='h-10 w-10' />
                <RxMixerVertical className='h-10 w-10' />
                <BsHeadphones className='h-10 w-10' />
                <SiAdobeaudition className='h-10 w-10' />
                <SiAdobepremierepro className='h-10 w-10' />
                <SiAdobephotoshop className='h-10 w-10' />

            </div>
            <p className='uppercase py-5 text-[#4a7eb3]'>From 2016 to Present</p>
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