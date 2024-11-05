"use client"
   // services.js o services.jsx
   import React from 'react';
import { FaHtml5,FaCss3,FaJs,FaAngular,FaReact,FaNode } from 'react-icons/fa';
import { SiNextdotjs,SiTailwindcss} from 'react-icons/si';
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"
import {motion} from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area";
const about={
  title:"About me ",
  description:"loreispsieknwdkn",
  info:[{
    fieldName:"Name",
    fieldValue:"Carlos Alfredo Pérez MOnterrey"
  },{
    fieldName:"Phone",
    fieldValue:"+53 55230827"
  },{
    fieldName:"Experience",
    fieldValue:"Carlos Alfredo Pérez MOnterrey"
  },{
    fieldName:"Skype",
    fieldValue:"carlomonterrey"
  },{
    fieldName:"Nationality",
    fieldValue:"Cuban"
  },{
    fieldName:"Freelancer",
    fieldValue:"Available"
  },{
    fieldName:"Lenguages",
    fieldValue:"Spanish,English"
  },]
}
const education={
  icon:"",
  title:"My education",
  description:"",
  items: [{
    institution:"University of Pinar del Río,Cuba",
    degree:"",
    duration:"4 years"
  }]
}
const skills={
  title:"My skills",
  description:"A representation of my habilities",
  skillLits:[
    {icon:<FaHtml5/>,
      name:"Html"
    },
    {icon:<FaCss3/>,
      name:"Css"
    }, {icon:<FaJs/>,
      name:"JavaScript"
    },
    {icon:<FaAngular/>,
      name:"Angular"
    },
    {icon:<FaReact/>,
      name:"React.js"
    },
    {icon:<SiNextdotjs/>,
      name:"Next.js"
    },
    {icon:<SiTailwindcss/>,
      name:"Tailwindcss"
    }
    , {icon:<FaNode/>,
      name:"Node"
    }
  ]
}
   const Resume = () => {
     return (
       <motion.div
       initial={{
        opacity:0
       }}
       animate={{
        opacity:1,
        transition:{delay:2.4,duration:0.2,ease:"easeIn"}
       }}
       className='min-h-[80vh] flex item-center justify-center py-12 xl:py-0'>
        <div className='container mx-auto'>
          <Tabs defaultValue='experience' 
          className='flex flex-col xl:flex-row gap-[60px]'>
            <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4'>
            <TabsTrigger value={'experience'}>Experience</TabsTrigger>
            <TabsTrigger value={'education'}>Education</TabsTrigger>

            <TabsTrigger value={'skills'}>Skills</TabsTrigger>

            <TabsTrigger value={'about'}>About me</TabsTrigger>

            </TabsList>
            <div className='min-h-[70] w-full'>
              <TabsContent value='experience' className='w-full'>
experience
              </TabsContent>

              
              <TabsContent value='about'
              className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
  <h3 className='text-4xl font-bold'>{about.title}</h3>
  <p className='max-white-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>

<ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-w-[620px]'>
  {about.info.map((info:any,index)=>{
    return (
      <li className='flex items-center justify-center xl:justify-start gap-4' key={index}>
        <span className='text-white/60'>{info.fieldName}</span>
        <span className='text-xl'>{info.fieldValue}</span>

      </li>
    )
  })}
</ul>
</div>
              </TabsContent>
              <TabsContent value='skills' className='w-full'>

<div className="flex flex-col gap-[30px]">
<div>
  <h3 className='text-4xl font-bold'>{skills.title}</h3>
  <p className='max-white-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
</div>
<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
  {skills.skillLits.map((skill:any,index)=>{
    return <li key={index}>
      <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center' >
          <div className='text-6xl hover:text-accent transition-all duration-300'>{skill.icon}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p className='capitalize'>{skill.name}</p>
        </TooltipContent>
      </Tooltip>
      </TooltipProvider>
      </li>
  })}
</ul>
  </div>           
     </TabsContent>
            </div>
          </Tabs>
        </div>
       </motion.div>
     );
   };

   export default Resume;