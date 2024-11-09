"use client"
import { motion } from 'framer-motion';
import React from 'react'
import {Input} from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FaGlobe, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { SiSkype } from 'react-icons/si';
const info:any=[{
 icon: <FaPhone />,
 title:'Phone',
 description:'(+53) 55230827',

},{
 icon: <SiSkype />,
 title:'Email',
 description:'carlosmonterrey17@gmail.com',
 
},
{
 icon: <FaMapMarkedAlt />,
 title:'Address',
 description:'Pinar del Río,Cuba',
 
}]
 const Contact = () => {
  return (
<motion.section 
 initial={{ opacity: 0 }}
        animate={{ opacity: 1,transition:{delay:2.4,duration:0.4,ease:"easeIn"} }}
        className='py-6'>
         <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]" >
           <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' action="">
             <h3 className='text-4xl text-accent'>Let´s work together</h3>
             <p className='text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus repellendus nesciunt dolorum, officia tempora dicta quisquam suscipit placeat nisi aspernatur voluptatibus soluta, nobis nostrum ratione cumque ab vel modi.</p>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Input type='firstname' placeholder='First name'></Input>
            <Input type='lastname' placeholder='Last name'></Input>
            <Input type='email' placeholder='Email'></Input>
            <Input type='phone' placeholder='Phone'></Input>
           </div>
           <Select>
            <SelectTrigger className='w-full'>
             <SelectValue placeholder='Select a service'>
              
             </SelectValue>
            </SelectTrigger>
            <SelectContent>
             <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value='fullstack'>Full Stack Developer
              </SelectItem>
              <SelectItem value='design'>Web Designer
              </SelectItem>
              <SelectItem value='backend'>API Development
              </SelectItem>
              <SelectItem value='database'>Database Management
              </SelectItem>
              <SelectItem value='responsivewebdesign'>Responsive Web Design
              </SelectItem>
              <SelectItem value='ecommerse'>E-commerce Solutions
              </SelectItem>
              <SelectItem value='optimization'>Performance Optimization

              </SelectItem>

             </SelectGroup>
            </SelectContent>
           </Select>
           <Textarea className='h-[200px]'
           placeholder='Type ypur message here.'>
            
           </Textarea>
           <Button size='md' className='max-w-40 bg-zinc-950'>Send Message</Button>
            </form>
           </div>
           <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className='flex flex-col gap-10'>
             {
              info.map((item:any,index:number)=>{
               return (<li key={index} className='flex items-center gap-6'>
                <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                 <div className='text-[28px]'>{item.icon}</div>
                </div>
                <div>
                 <p>{item.title}</p> 
                 <h3>{item.description}</h3>
                </div>

               </li>)
              })
             }
            </ul>
           </div>
          </div>

         </div>
        </motion.section>  )
}
export default Contact;
