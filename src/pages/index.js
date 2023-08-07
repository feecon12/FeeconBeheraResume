import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import Image from 'next/image'
import profilepic from '../../public/images/profile/developer-pic-1.png'
import { AnimatedText } from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/bulb.svg'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Feecon Behera Resume</title>
        <meta name="description" content="Generated by create next app" />

      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilepic} alt='FME' className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='text-6xl text-left' />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.

              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href='/dummy.pdf' target={'_blank'} className='flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid hover:border-dark'
                  download={true}
                >Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>

                <Link href='mailto:mail2feeconbehera@gmail.com' target={'_blank'}
                  className='ml-4 text-lg font-medium  capitalize text-dark underline'
                >Contact</Link>
              </div>
            </div>

          </div>
          <HireMe />
          <div className='absolute right-8 bottom-0 inline-block w-24'> 
            <Image src={lightBulb}  alt="Feecon" className='w-full h-auto'/>

          </div>

        </Layout>

      </main>
    </>
  )
}
