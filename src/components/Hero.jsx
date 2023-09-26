import React from 'react'

export default function Hero() {

  function handleDownload() {
    
  }
  return (
    <section className='flex flex-col items-center justify-center  h-screen w-full pt-24 px-6 pb-4'>
      <h1 className='text-darkcolor text-[32px] lg:text-[44px] font-bold'>Hi, I am Bright, <br /> Web Developer</h1>
      <p className='mt-5 lg:mt-10 text-darkcolor text-center'>I am a frontend developer and technical writer. I find pleasure in crafting interactive, dynamic websites with the latest technologies and equally enjoy writing as it enables me to educate others.</p>

      <button type="button" className='bg-[#ff6464] text-white rounded-sm text-center py-2 w-52 mt-7 lg:mt-9'>Download Resume</button>
    </section>
  )
}

