import { Link } from 'lucide-react'
import React from 'react'
import {FaGithub,FaLinkedinIn} from "react-icons/fa"
const socials=[
 {icon:<FaGithub/>,path:"/jnsnndnd"},
 {icon:<FaLinkedinIn/>,path:"/ndsnsdnj"}

]
export const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
     {socials.map((item,index)=>{
      return (<Link key={index} href={item.path} className={iconStyles}></Link>)
     })}
    </div>
  )
}
