"use client"

import { Sheet } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import { SheetContent, SheetTrigger } from './sheet'

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
 const pathname=usePathname()
  return (
<Sheet>
 <SheetTrigger className='flex justify-center items-center'>
{/*  <CiMenuFries className='text-[32px] text-accent'/>
 */} </SheetTrigger>
 <SheetContent className='flex flex-col'>
  <div>logo</div>
 </SheetContent>

</Sheet>  )
}
