"use client"
import React from 'react'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next';

const stats = [
  {
    num: 2,
    text: 'YEARS_OF_EXPERIENCE', 
  },
  {
    num: 20,
    text: 'TECHNOLOGIES_MASTERED', 
  },
  {
    num: 4,
    text: 'PROJECTS', 
  },
  {
    num: 1120,
    text: 'CODE_COMMITS', 
  },
];
export const Stats = () => {
  const { t } = useTranslation();

  return (
<section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
 <div className="container mx-auto">
  <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
   {stats.map((item:any,index:number)=>{
    return (<div
    className='flex flex-1 gap-4 items-center justify-center xl:justify-start'
     key={index}>
     <CountUp end={item.num}
     duration={5}
     delay={2}
     className='text-4xl xl:text-6xl font-extrabold'/>
     <p className={`${t(item.text).length<15?"max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>{t(item.text)}</p>
    </div>)
   })}
  </div>
 </div>
</section>  )


}
