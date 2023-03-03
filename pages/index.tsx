import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[#1e3348] text-[#7aa0c7] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#34597e] scrollbar-thumb-[#4a7eb3]'>
      <Head>
        <title>Cerulean Media, LLC. Company Site</title>
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
            <img 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/306321191_472923701516788_1036067590155672267_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wiix7Tn6rJQAX80XrMD&_nc_ht=scontent-ord5-1.xx&oh=00_AfDxnait8cS1UU7KDIfOBlT5VJtm40vGe5cyK_sSq_f3yg&oe=640528BE'
              alt='Photo of Michael and link back to Home page'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
