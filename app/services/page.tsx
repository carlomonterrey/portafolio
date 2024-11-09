
"use client" 
import {BsArrowDownRight}from "react-icons/bs"
import React from 'react';
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
const services = [
  { num: '01', title: 'Full Stack Developer', description: 'Expert in building scalable web applications using modern technologies such as Angular, Node.js, and MongoDB.', href: '/' },
  { num: '02', title: 'Web Designer', description: 'Creating visually appealing and user-friendly designs tailored to client needs, ensuring a seamless user experience.', href: '/' },
  { num: '03', title: 'API Development', description: 'Designing and developing RESTful APIs to enable smooth communication between front-end and back-end systems.', href: '/' },
  { num: '04', title: 'Database Management', description: 'Expertise in database design, optimization, and management using SQL and NoSQL databases.', href: '/' },
  { num: '05', title: 'Responsive Web Design', description: 'Building responsive websites that provide an optimal viewing experience across a wide range of devices.', href: '/' },
  { num: '06', title: 'E-commerce Solutions', description: 'Developing robust e-commerce platforms with secure payment gateways and user-friendly interfaces.', href: '/' },
  { num: '07', title: 'Performance Optimization', description: 'Analyzing and optimizing web applications for improved speed and performance.', href: '/' },
];
   const Services = () => {
     return (
     <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container max-auto"> 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1,transition:{
          delay:2.4,duration:0.4,ease:"easeIn"
        }}}
        > 
<ScrollArea  className='h-[700px] lg:h-[500px]'>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service:any,index)=>{
          return (
          <div key={index}
           className='flex flex-col justify-center gap-6 group'>
<div 
className='w-full flex justify-between items-center '>
  <div 
  className='text-5xl font-extrabold 
  text-outline text-transparent group-hover:text-outline-hover 
  transition-all duration-500'>{service.num}
  </div>
  <a 
  className='w-[70px] h-[70px] rounded-full 
  bg-white group-hover:bg-accent transition-all 
  duration-500 flex justify-center items-center 
  hover:-rotate-45' href={service.href}> <BsArrowDownRight className="text-primary text-3xl"/> </a> 
  </div>  
  <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all 
  duration-500'>{service.title}</h2>
  <p className='text-ehite/60'>{service.description}</p>
  <div className='border-b border-white/20 w-full'></div>
       
     </div>)
        })}
          </div>
  </ScrollArea>         
 
      
        </motion.div>
      </div>
     </section>
     );
   };

   export default Services;