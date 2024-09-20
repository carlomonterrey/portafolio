import React from 'react'

export const PageTransition = ({children}) => {
  return (
   <AnimatePresence>
    {children}
   </AnimatePresence>
  )
}
