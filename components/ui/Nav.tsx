"use client"
import Link  from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next';



const links = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/services' },
  { name: 'RESUME', path: '/resume' },
  { name: 'WORK', path: '/work' },
  { name: 'CONTACT', path: '/contact' }
];



export const Nav = () => {
  const { t } = useTranslation();

const pathname=usePathname()
console.log(pathname);

  return (
<nav className='flex gap-8'>{
 links.map((link,index)=>{
  return(
   <Link href={link.path} key={index} className={`${link.path===pathname&&"text-accent border-b-2 border-accent"} 
   capitalize font-medium hover:text-accent transition-all`}>
      {t(link.name)}</Link>
  )
 })
}</nav>  )
}
