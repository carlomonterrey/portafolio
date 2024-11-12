"use client" 
import { BsArrowDownRight } from "react-icons/bs";
import React from 'react';
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from 'react-i18next';

const services = [
  { num: '01', title: 'FULL_STACK_DEVELOPER', description: 'SERVICE_DESCRIPTION_1', href: '/' },
  { num: '02', title: 'WEB_DESIGNER', description: 'SERVICE_DESCRIPTION_2', href: '/' },
  { num: '03', title: 'API_DEVELOPMENT', description: 'SERVICE_DESCRIPTION_3', href: '/' },
  { num: '04', title: 'DATABASE_MANAGEMENT', description: 'SERVICE_DESCRIPTION_4', href: '/' },
  { num: '05', title: 'RESPONSIVE_WEB_DESIGN', description: 'SERVICE_DESCRIPTION_5', href: '/' },
  { num: '06', title: 'ECOMMERCE_SOLUTIONS', description: 'SERVICE_DESCRIPTION_6', href: '/' },
  { num: '07', title: 'PERFORMANCE_OPTIMIZATION', description: 'SERVICE_DESCRIPTION_7', href: '/' },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container max-auto"> 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}}
        > 
          <ScrollArea className='h-[700px] lg:h-[500px]'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
              {services.map((service, index) => {
                return (
                  <div key={index} className='flex flex-col justify-center gap-6 group'>
                    <div className='w-full flex justify-between items-center'>
                      <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                      <a className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45' href={service.href}>
                        <BsArrowDownRight className="text-primary text-3xl"/> 
                      </a> 
                    </div>  
                    <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{t(service.title)}</h2>
                    <p className='text-white/60'>{t(service.description)}</p>
                    <div className='border-b border-white/20 w-full'></div>
                  </div>
                )
              })}
            </div>
          </ScrollArea>         
        </motion.div>
      </div>
    </section>
  );
};

export default Services;