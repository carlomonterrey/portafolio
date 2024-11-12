"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FaGlobe, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { SiSkype } from 'react-icons/si';
import emailjs from 'emailjs-com';
import { toast, Toaster } from "sonner";
import { useTranslation } from 'react-i18next';

const info = [
  {
    icon: <FaPhone />,
    title: 'PHONE',
    description: '(+53) 55230827',
  },
  {
    icon: <SiSkype />,
    title: 'EMAIL',
    description: 'carlosmonterrey17@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'ADDRESS',
    description: 'Pinar del Río, Cuba',
  }
];

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    emailjs.send('service_auk8k2n', 'template_b7y6vqr', formData, 'FRsC4LFLhLb6OXsH3')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        toast.success(t('EMAIL_SUCCESS'), {
          description: new Date().toLocaleString(),
        });
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      }, (err) => {
        console.error('Failed to send email. Error:', err);
        toast.error(`${t('EMAIL_ERROR')} ${err}`);
      });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='py-6'>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' onSubmit={handleSubmit}>
              <h3 className='text-4xl text-accent'>{t('LETS_WORK_TOGETHER')}</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input 
                  name='firstname' 
                  type='text' 
                  placeholder={t('FIRST_NAME')} 
                  value={formData.firstname} 
                  onChange={handleChange} 
                />
                <Input 
                  name='lastname' 
                  type='text' 
                  placeholder={t('LAST_NAME')} 
                  value={formData.lastname} 
                  onChange={handleChange} 
                />
                <Input 
                  required
                  name='email' 
                  type='email' 
                  placeholder={t('EMAIL_LABEL')} 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                <Input 
                  name='phone' 
                  type='text' 
                  placeholder={t('PHONE_LABEL')} 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>
              <Select required onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder={t('SELECT_SERVICE')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{t('SELECT_SERVICE')}</SelectLabel>
                    <SelectItem value='fullstack'>{t('FULL_STACK_DEVELOPER')}</SelectItem>
                    <SelectItem value='design'>{t('WEB_DESIGNER')}</SelectItem>
                    <SelectItem value='backend'>{t('API_DEVELOPMENT')}</SelectItem>
                    <SelectItem value='database'>{t('DATABASE_MANAGEMENT')}</SelectItem>
                    <SelectItem value='responsivewebdesign'>{t('RESPONSIVE_WEB_DESIGN')}</SelectItem>
                    <SelectItem value='ecommerse'>{t('ECOMMERCE_SOLUTIONS')}</SelectItem>
                    <SelectItem value='optimization'>{t('PERFORMANCE_OPTIMIZATION')}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className='h-[200px]' placeholder={t('TYPE_YOUR_MESSAGE')} onChange={handleChange}></Textarea>
              <Button size='md' className='max-w-40 bg-zinc-950' type='submit'>{t('SEND_MESSAGE')}</Button>
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className='flex flex-col gap-10'>
              {
                info.map((item, index) => (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div>
                      <p>{t(item.title)}</p> 
                      <h3>{item.description}</h3>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <Toaster closeButton />
      </div>
    </motion.section>
  );
}

export default Contact;