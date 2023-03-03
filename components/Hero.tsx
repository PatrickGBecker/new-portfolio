import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import headshot from '../public/assets/headshot.png';
import Link from 'next/link';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Oh, hi! my name is Michael Everett.',
        'My production company is Cerulean Media, LLC.', 
        'I hope we can make beautiful things together.', 
    ],
    loop: false,
    delaySpeed: 1000,
    });

  return (
    <div className='h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
            className='relative rounded-full h-40 w-40 object-cover'
            src='https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/306321191_472923701516788_1036067590155672267_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wiix7Tn6rJQAX80XrMD&_nc_ht=scontent-ord5-1.xx&oh=00_AfDxnait8cS1UU7KDIfOBlT5VJtm40vGe5cyK_sSq_f3yg&oe=640528BE'
            alt='Photo of Michael'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-[#4a7eb3] pb-2 tracking-[15px]'>Videographer & Audio Engineer</h2>
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