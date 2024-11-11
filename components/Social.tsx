import { Link } from 'lucide-react';
import React from 'react'
import {FaGithub,FaLinkedinIn} from "react-icons/fa"
const socials=[
 {icon:<FaGithub />,path:"https://github.com/carlomonterrey/"},
 {icon:<FaLinkedinIn />,path:""}

]
interface SocialProps {
  containerStyles?: string;
  iconStyles?: string; 
}
export const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles} >
        {socials.map((item, index) => (
     <a key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
     {item.icon} {/* Renderiza el ícono aquí */}
   </a>
   ))}

    </div>
  )
}
