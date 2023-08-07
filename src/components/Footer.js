import React from 'react'
import { Layout } from './Layout'
import Link from 'next/link'

export const Footer = () => {
  return (
      <footer className='w-full border-t-2 border-solid border-dark'>
          <Layout className='py-7 flex items-center justify-between'> 
              <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
              <div>
              Made by&nbsp;<Link href='https://www.google.com'><span className='underline underline-offset-2'>FME India</span></Link> with<span className='text-primary text-2xl px-1'>&#9825;</span>
              </div>
              
              <Link href='https://www.google.com' className='underline underline-offset-2'>Say hello</Link>
          </Layout>
    </footer>
  )
}
