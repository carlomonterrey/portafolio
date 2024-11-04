"use client"

import { Sheet } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import { SheetContent, SheetTrigger } from './ui/sheet'
import { CiMenuFries } from 'react-icons/ci'; // Asegúrate de que esta importación sea correcta

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

},{
  name:'contact',
  path:'/contact'
 
 }]

export const MobileNav = () => {
  return (
   <>
   <Sheet>
   <SheetTrigger className='flex justify-center items-center'>
    <CiMenuFries className="text-[32] text-accent"/>

   
   </SheetTrigger>
  </Sheet></>  )
}

