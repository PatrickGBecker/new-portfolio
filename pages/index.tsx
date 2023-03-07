import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Profile from '../public/assets/profile.jpg'

export default function Home() {
  return (
    <div className='bg-[#006b6b] text-[#7cc78c] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#34597e] scrollbar-thumb-[#eeb343]'>
      <Head>
        <title>Patrick Becker's Developer Portfolio</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='portfolio' className='snap-start'>
        <Portfolio />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image 
              className='h-10 w-10 rounded-full filter opacity-40 hover:opacity-100 cursor-pointer'
              src={Profile}
              alt='Photo of Michael and link back to Home page'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
