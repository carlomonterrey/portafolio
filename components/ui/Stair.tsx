"use client"
import React from 'react'
import {motion} from "framer-motion"
const stairsAnimation={
 initial:{
  top:"0%"

 },
 animate:{
  top:"100%"

 },
 exit:{
  top:["100","0%"]

 }
} 
const reverseIndex=(index: number)=>{
 const totalSteps=6
 return totalSteps-index-1 
}
export const Stair = () => {

  return ( 
<>
{[...Array(6).map((_,index:number)=> {
  return(
  <motion.div
  className="h-full w-full bg-white relative"
  key={index}
  variants={stairsAnimation}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{
   duration:0.4,
   ease:"easeInOut",
   delay:reverseIndex(index)*0.1,

  }}/>)
})]}
 </>  )
}
