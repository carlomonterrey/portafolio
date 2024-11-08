"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // o 'swiper/css' dependiendo de la versión que estés usando

import Image from 'next/image'

// services.js o services.jsx
import React, { useState } from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Sceiba',
    description: '',
    stack: [{ name: 'Html 5' }, { name: 'Css' }, { name: 'Typescript' }, { name: 'Angular' }, { name: 'Angular Material' }],
    imagen: '/assets/photo3.jpg',
    live: '',
    github: ''
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Senfima Produckto',
    description: '',
    stack: [{ name: 'Html 5' }, { name: 'Css' }, { name: 'Typescript' }, { name: 'Angular' }, { name: 'Angular Material' }, { name: 'Primeng' }],
    imagen: '/assets/photo3.jpg',
    live: '',
    github: ''
  },
  {
    num: '03',
    category: 'backend',
    title: 'RDF Graph',
    description: '',
    stack: [{ name: 'python' }, { name: 'Flask' }, { name: 'RDF lib' }, { name: 'Elasticsearch' }],
    imagen: '',
    live: '',
    github: ''
  }
]
const Work = () => {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange=(swiper:any) =>{
const currentIndex=swiper.activeIndex
setProject(projects[currentIndex])  }

  return (
    <div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
        <div className="container mx-auto">
          <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
            <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
              <div className='flex flex-col gap-[30px] h-[50%]'>
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
                <h2 className='text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                <p className='text-white/60'>{project.description}</p>
                <ul className='flex gap-4'>
                  {project.stack.map((item: any, index) => {
                    return (<li key={index} className='text-xl text-accent'>{item.name}</li>)
                  })}
                </ul>
                <div className='border border-white/20'></div>
                <div className='flex items-center gap-4'>
                  <a href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsArrowUpRight className='text-white text-3xl hover:text-accent'></BsArrowUpRight>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>

                  <a href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                          <BsGithub className='text-white text-3xl hover:text-accent'></BsGithub>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full xl:w-[50%] '>
              <Swiper
               spaceBetween={30}
                slidesPerView={1}
                className='xl:h-[520px] mb-12'
                onSlideChange={handleSlideChange}>
                {projects.map((project: any, index) => {
                  return (
                    <SwiperSlide key={index} className='w-full'>
                      <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/50'>
                        <div></div>
                        <div className='w-full h-full relative'>
                          <Image src={project.imagen} fill className='object-cover' alt={''} />
                        </div>
                      </div>
                    </SwiperSlide>

                  )
                })}

              </Swiper>     
               </div>
          </div>
        </div>

      </motion.section>   
          </div>
  );
};

export default Work;