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
  description:"",
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
        transition:{delay:2.4,duration:0.4,ease:"easeIn"}
       }}
       className='min-h-[80vh] flex item-center justify-center py-12 xl:py-0'>
        <div className='container mx-auto'>
          <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
            <TabsList>
            <TabsTrigger value={''}>Experience</TabsTrigger>
            <TabsTrigger value={''}>Education</TabsTrigger>

            <TabsTrigger value={''}>Skills</TabsTrigger>

            <TabsTrigger value={''}>About me</TabsTrigger>

            </TabsList>
          </Tabs>
        </div>
         <h1>Resume</h1>
         {/* Contenido de los servicios */}
       </motion.div>
     );
   };

   export default Resume;