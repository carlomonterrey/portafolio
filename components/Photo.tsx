import React from 'react'
import Image from 'next/image'

export const Photo = () => {
  return (
    <div className='w-full h-full relative'>
<div className='w-[298px] h-[300px] xl:w-[474px] xl:h-[524px] rounded-full mix-blend-lighten'>
<Image
       alt={''} priority quality={100}
        fill className='object-container'
         src={'/assets/perfil.png'}/>


</div>
    </div>
  )
}
