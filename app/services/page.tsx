
"use client" 
import {BsArrowDownRight}from "react-icons/bs"
import React from 'react';
import { motion } from "framer-motion";
const services=[
  {num:'01',title:'Web Developer',description:'loreispsieknwdkn',href:'/'},
  {num:'02',title:'Web Designer',description:'loreispsieknwdkn',href:'/'},
  {num:'03',title:'Web Developer',description:'loreispsieknwdkn',href:'/'},
  {num:'04',title:'Web Designer',description:'loreispsieknwdkn',href:'/'},
  

]
   const Services = () => {
     return (
     <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container max-auto"> 
        <div
       
        className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
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
      </div>
     </section>
     );
   };

   export default Services;