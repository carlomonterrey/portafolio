"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import {Input} from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FaGlobe, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { SiSkype } from 'react-icons/si';
import emailjs from 'emailjs-com';
import { toast, Toaster } from "sonner"

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
  const [formData, setFormData] = useState({
   firstname: '',
   lastname: '',
   email: '',
   phone: '',
   service: '',
   message: '',
 });
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e: { preventDefault: () => void; }) => {
   e.preventDefault();

   emailjs.send('service_auk8k2n', 'template_b7y6vqr', formData, 'FRsC4LFLhLb6OXsH3')
     .then((response) => {
       console.log('Email successfully sent!', response.status, response.text);
       toast.success('Email successfully sent!',
        {
         description: new Date().toLocaleString(),
       }
       )
       setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
       // Puedes agregar un mensaje de éxito para el usuario aquí
     }, (err) => {
       console.error('Failed to send email. Error:', err);
       toast.error(`Failed to send email. Error:', ${err}`)

       // Manejo de errores
     });
 };
  return (
<motion.section 
 initial={{ opacity: 0 }}
        animate={{ opacity: 1,transition:{delay:2.4,duration:0.4,ease:"easeIn"} }}
        className='py-6'>
         <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]" >
           <div className='xl:h-[54%] order-2 xl:order-none'>
           <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' onSubmit={handleSubmit}>
           <h3 className='text-4xl text-accent'>Let´s work together</h3>
             <p className='text-white/60'></p>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
           <Input 
  name='firstname' 
  type='text' 
  placeholder='First name' 
  value={formData.firstname} 
  onChange={handleChange} // Asegúrate de que esto esté presente
/>
<Input 

  name='lastname' 
  type='text' 
  placeholder='Last name' 
  value={formData.lastname} 
  onChange={handleChange} // Asegúrate de que esto esté presente
/>
<Input 
required
  name='email' 
  type='email' 
  placeholder='Email' 
  value={formData.email} 
  onChange={handleChange} // Asegúrate de que esto esté presente
/>
<Input 

  name='phone' 
  type='text' 
  placeholder='Phone' 
  value={formData.phone} 
  onChange={handleChange} // Asegúrate de que esto esté presente
/>
           </div>
           <Select required onValueChange={(value) => setFormData({ ...formData, service: value })}>
           <SelectTrigger className='w-full'>
             <SelectValue  placeholder='Select a service'>
              
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
           placeholder='Type ypur message here.' onChange={handleChange}>
            
           </Textarea>
           <Button size='md' className='max-w-40 bg-zinc-950' type='submit'>Send Message</Button>
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
          <Toaster closeButton />

         </div>
        </motion.section>  )
}
export default Contact;
