"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // o 'swiper/css' dependiendo de la versión que estés usando
import {WorkSliderBtns} from '@/components/WorkSliderBtns'
import Image from 'next/image'

// services.js o services.jsx
import React, { useState } from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Sceiba',
    description: 'I successfully migrated a system from Angular version 8 to version 17, with a strong emphasis on reducing production bundle sizes and enhancing loading times. This migration involved replacing outdated libraries that were incompatible with Angular 17 with modern, up-to-date alternatives.Conducted comprehensive quality assurance tests that enabled me to identify and rectify software errors, significantly improving overall quality and optimizing performance.Enhanced search functionalities and interoperability between various systems at the University of Pinar del Río by developing a property graph, facilitating better data management and retrieval.',
    stack: [{ name: 'Html 5' }, { name: 'Css' }, { name: 'Typescript' }, { name: 'Angular' }, { name: 'Angular Material' }],
    imagen: '/assets/sceiba.png',
    live: '',
    github: ''
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Senfima Produkto',
    description: 'I led the development of a business management system from scratch, specifically designed to optimize operations for a warehouse and point of sale. This software enables efficient tracking of inventory and sales processes, facilitating the daily management of the business.',
    stack: [{ name: 'Html 5' }, { name: 'Css' }, { name: 'Typescript' }, { name: 'Angular' }, { name: 'Angular Material' }, { name: 'Primeng' },{ name: 'NextJs' },{ name: 'MongoDB' }],
    imagen: '/assets/senfima.png',
    live: '',
    github: ''
  },
  {
    
    num: '03',
    category: 'backend',
    title: 'RDF Graph for Sceiba',
    description: 'I developed a comprehensive RDF knowledge graph using data from Sceiba, which significantly enhanced interoperability and facilitated more semantic information retrieval. This graph not only streamlined data access but also enabled the integration of advanced artificial intelligence tasks, allowing for more intelligent data processing and analysis.By leveraging the semantic capabilities of the RDF model, users can now perform complex queries and gain deeper insights from the data, fostering a more intuitive and efficient approach to information discovery. ',
    stack: [{ name: 'python' }, { name: 'Flask' }, { name: 'RDF lib' }, { name: 'Elasticsearch' }],
    imagen: '/assets/graph.png',
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
        animate={{ opacity: 1,transition:{delay:2.4,duration:0.4,ease:"easeIn"} }}
        className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
        <div className="container mx-auto">
          <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
            <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
              <div className='flex flex-col gap-[30px] h-[50%]'>
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}  </div>
                <h2 className='text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize'>{project.title} </h2>
                <p className='text-white/60'>{project.description}</p>
                <ul className='flex flex-wrap gap-4'>
                  {project.stack.map((item: any, index) => {
                    return (<li key={index} className='text-xl text-accent'>{item.name} </li>)
                  })}
                </ul>
                <div className='border border-white/20'></div>
                <div className='flex items-center gap-4'>
                 {project.live!=''&&(
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

                 )

                 }
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
<WorkSliderBtns containerStyle={'flex  gap-2 absolute right-0 bottom-[cal(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'}
 btnStyle={'bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'} iconsStyle={''}></WorkSliderBtns>
              </Swiper>     
               </div>
          </div>
        </div>

      </motion.section>   
          </div>
  );
};

export default Work;