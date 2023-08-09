import React from 'react'
import { Layout } from './Layout'
import Link from 'next/link'

export const Footer = () => {
  return (
      <footer className='w-full border-t-2 border-solid border-dark dark:border-light dark:text-light'>
          <Layout className='py-7 flex items-center justify-between'> 
              <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
              <div>
              Made with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by <Link href='https://www.google.com'><span className='underline underline-offset-2'>Feecon Behera</span></Link> 
              </div>
              
              <Link href='https://www.google.com' className='underline underline-offset-2'>Say hello</Link>
          </Layout>
    </footer>
  )
}
