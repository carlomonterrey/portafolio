"use client"
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaAngular, FaReact, FaNode, FaPython, FaUser, FaPhone, FaBriefcase, FaGlobe, FaLanguage } from 'react-icons/fa';
import { SiDocker, SiMongodb, SiNextdotjs, SiPostgresql, SiSkype, SiTailwindcss } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from 'react-i18next';

const about = {
  title: "ABOUT_ME",
  description: "ABOUT_DESCRIPTION",
  info: [
    {
      fieldName: "NAME",
      fieldValue: "Carlos Alfredo Pérez Monterrey",
      icon: <FaUser />
    },
    {
      fieldName: "PHONE",
      fieldValue: "+53 55230827",
      icon: <FaPhone />
    },
    {
      fieldName: "EXPERIENCE",
      fieldValue: "2 years",
      icon: <FaBriefcase />
    },
    {
      fieldName: "SKYPE",
      fieldValue: "carlomonterrey",
      icon: <SiSkype />
    },
    {
      fieldName: "NATIONALITY",
      fieldValue: "Cuban",
      icon: <FaGlobe />
    },
    {
      fieldName: "FREELANCER",
      fieldValue: "Available",
      icon: <FaBriefcase />
    },
    {
      fieldName: "LANGUAGES",
      fieldValue: "Spanish, English",
      icon: <FaLanguage />
    },
  ]
};

const experience = {
  icon: "",
  title: "MY_EXPERIENCE", 
  description: "EXPERIENCE_DESCRIPTION", 
  items: [
    {
      company: "UPR",
      position: "Full Stack Developer",
      duration: "Jan 2024 - Present",
      description: "Developing and maintaining web applications, collaborating with cross-functional teams to deliver high-quality software solutions."
    },
    {
      company: "MasUno S.R.L",
      position: "Frontend Developer",
      duration: "Jan 2024 - Oct 2024",
      description: "Focused on creating responsive and visually appealing user interfaces, ensuring optimal user experience through effective design principles."
    },
  ]
};

const education = {
  icon: "",
  title: "MY_EDUCATION", 
  description: "EDUCATION_DESCRIPTION", 
  items: [
    {
      institution: "UPR",
      degree: "DEGREE",
      duration: "Sep 2019 - Dec 2023",
      description: "Acquired a comprehensive understanding of computer science principles, programming languages, and software development methodologies."
    },
    {
      institution: "CRAI Department of the University of Pinar del Río, Cuba",
      degree: "Full Stack Developer Internship",
      duration: "Feb 2021 - Dec 2023",
      description: "Gained hands-on experience in full stack development, working on real-world projects and collaborating with industry professionals."
    }
  ]
};

const skills = {
  title: "MY_SKILLS",
  description: "",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaAngular />, name: "Angular" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNode />, name: "Node.js" },
    { icon: <FaPython />, name: "Django" }, 
    { icon: <SiPostgresql />, name: "PostgreSQL" }, 
    { icon: <SiMongodb />, name: "MongoDB" }, 
    { icon: <SiDocker />, name: "Docker" }
  ]
};

const Resume = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.2, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex item-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4'>
            <TabsTrigger value={'experience'}>{t('MY_EXPERIENCE')}</TabsTrigger>
            <TabsTrigger value={'education'}>{t('MY_EDUCATION')}</TabsTrigger>
            <TabsTrigger value={'skills'}>{t('MY_SKILLS')}</TabsTrigger>
            <TabsTrigger value={'about'}>{t('ABOUT_ME')}</TabsTrigger>
          </TabsList>
          <div className='min-h-[70] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{t(experience.title)}</h3>
                <p className='max-white-[600px] text-white/60 mx-auto xl:mx-0'>{t(experience.description)}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] p-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{t(item.company)}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{t(education.title)}</h3>
                <p className='max-white-[600px] text-white/60 mx-auto xl:mx-0'>{t(education.description)}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] p-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{t(item.degree)}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{t(item.institution)}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{t(about.title)}</h3>
                <p className='max-white-[600px] text-white/60 mx-auto xl:mx-0'>{t(about.description)}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-w-[620px]'>
                  {about.info.map((info, index) => {
                    return (
                      <li className='flex items-center justify-center xl:justify-start gap-4' key={index}>
                        <span>{info.icon}</span>
                        <span className='text-white/60'>{t(info.fieldName)}</span>
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
                  <h3 className='text-4xl font-bold'>{t(skills.title)}</h3>
                  <p className='max-white-[600px] text-white/60 mx-auto xl:mx-0'>{t(skills.description)}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index) => {
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