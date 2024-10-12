import { Social } from "@/components/Social";
import { Button } from "@/components/ui/button";

import { IoMdDownload } from "react-icons/io"

 export default function Home() {
  return (
    <section className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left">
          <span className="text-xl">Softwere Developer</span>
          <h1 className="h1 mb-6">Hello I am <br /><span className="text-accent">Carlos Monterrey</span>
          </h1>
          <p className="max-w-[600px] mb-9 text-white/80">
          I am a dedicated web developer with a passion for crafting innovative tech solutions. I
focus on creating high-quality products that not only meet rigorous standards but also
push me to continuously improve my skills and knowledge. I’m driven by a desire to
constantly learn and optimize both my work and the user experiences I help create.
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2 bg-primary border-accent text-accent  hover:bg-accent
          hover:text-primary">
            <span>Download CV</span>
            <IoMdDownload className='text-xl'/>
          </Button>
          <div className="mb-8 xl:mb-0">
<Social 
containerStyles="flex  gap-6 items-center h-16" 
iconStyles="w-9 h-9 border border-accent rounded-full flex
 justify-center items-center text-accent text-base hover:bg-accent
  hover:text-primary hover:transition-all duration-500"></Social>   
       </div>
        </div>
        
        <div>foto</div>
      </div>
    </section>
   );
}
