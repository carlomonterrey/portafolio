"use-client"
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Stair } from './Stair'

export const StairTransition = () => {
  const pathname=usePathname()
  return (
<>
<AnimatePresence mode="wait">
  <div key={pathname}>
    <div className='h-screen w-screen fixed
    top-0 left-0 right-0 pointer-event-none z-40 flex'>
<Stair/>
    </div>
  </div>
</AnimatePresence>
</>  )
}
