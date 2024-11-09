import React from 'react'
import { useSwiper } from 'swiper/react'
import {PiCaretLeftBold,PiCaretRightBold} from  "react-icons/pi"
interface WorkSliderBtnsProps {
 containerStyle: string; // Cambia 'string' por el tipo que necesites
 btnStyle: string; // Cambia 'string' por el tipo que necesites
 iconsStyle: string; // Cambia 'string' por el tipo que necesites
}
export const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ containerStyle, btnStyle, iconsStyle }) => {
 const swiper=useSwiper()
  return (
    <div className={containerStyle}>
     <button className={btnStyle} onClick={()=>swiper.slidePrev()}>
     <PiCaretLeftBold className={iconsStyle}></PiCaretLeftBold>
     </button>
     <button className={btnStyle} onClick={()=>swiper.slideNext()}>
     <PiCaretRightBold className={iconsStyle}></PiCaretRightBold>
     </button>
    </div>
  )
}
