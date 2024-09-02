"use client"
import Link  from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



const links=[{
 name:'home',
 path:'/'

},
{
 name:'services',
 path:'/services'

},
{
 name:'resume',
 path:'/resume'

},
{
 name:'work',
 path:'/work'

}]


export const Nav = () => {
const pathname=usePathname()
console.log(pathname);

  return (
<nav className='flex gap-8'>{
 links.map((link,index)=>{
  return(
   <Link href={link.path} key={index} className={`${link.path===pathname&&"text-accent border-b-2 border-accent"} 
   capitalize hover:text-accent transition-all`}>
    {link.name}</Link>
  )
 })
}</nav>  )
}
