'use client';
import { Button } from '@/components'

const ExperiencePage = () => {
  return (
    <div className='flex flex-col h-screen w-full px-[120px] max-w-[1600px] gap-[128px]'>
      <h1 className='font-semibold text-[57px]'><span className='text-[#c4c4c4]'>{`// `}</span>Projects</h1>
      <div className='flex w-full items-center gap-[64px]'>
        <div className='flex flex-col h-full gap-[32px]'>
          <h2 className='text-[36px] font-semibold'>simpleship</h2>
          <p className='text-[#c4c4c4] text-[20px] font-semibold max-w-[500px]'>Simple startup saas, empowering developers and business owners to launch their business fast. Built using Next.js, mongoDB/supabase, tailwind, stripe, mailchimp, and next auth.</p>
          <Button 
            text='check it out'
            onClick={() => {}}
            iconAlt='binoculars'
            iconSrc='/binoculars.svg'
            iconHeight={32}
            iconWidth={32}
          />
          <Button 
            text='See the code'
            onClick={() => {}}
            iconAlt='github'
            iconSrc='/github.svg'
            iconHeight={32}
            iconWidth={32}
          />
        </div>
        <div className='flex w-[50%] h-[400px] rounded-[36px] border-4 border-[#2c4234] shadow-md shadow-gray-600'>
        
        </div>
      </div>
      <div className='flex w-full items-center gap-[64px]'>
        <div className='flex w-[50%] h-[400px] rounded-[36px] border-4 border-[#2c4234] shadow-md shadow-gray-600'>
        
        </div>
        <div className='flex flex-col h-full gap-[32px]'>
          <h2 className='text-[36px] font-semibold'>BC Lock</h2>
          <p className='text-[#c4c4c4] text-[20px] font-semibold max-w-[500px]'>Small business web application built with React, Next.js, and SCSS</p>
          <Button 
            text='check it out'
            onClick={() => {}}
            iconAlt='binoculars'
            iconSrc='/binoculars.svg'
            iconHeight={32}
            iconWidth={32}
          />
          <Button 
            text='See the code'
            onClick={() => {}}
            iconAlt='github'
            iconSrc='/github.svg'
            iconHeight={32}
            iconWidth={32}
          />
        </div>
      </div>
    </div>
  )
}

export default ExperiencePage;