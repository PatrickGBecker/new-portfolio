import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import Headshot from '../public/assets/Headshot.png'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Hello there! I\'m Patrick Becker.',
        'I love designing...', 
        'building...',
        'and deploying web applications!',
        'I hope we can make beautiful things together.', 
    ],
    loop: false,
    delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image
            className='relative rounded-full h-40 w-40 object-cover'
            src={Headshot}
            alt='Photo of Michael'
        />
        <div className='z-20'>
            <h2 className='text-md uppercase text-[#eeb343] pb-2 tracking-[15px]'>Frontend Software Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#4a7eb3' />
            </h1>

            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                  <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                  <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                  <Link href='#portfolio'>
                    <button className='heroButton'>Portfolio</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero