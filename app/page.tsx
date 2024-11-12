"use client"
import { Photo } from "@/components/Photo";
import { Social } from "@/components/Social";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { IoMdDownload } from "react-icons/io"
import { useTranslation } from 'react-i18next';
import './i18n/i18next'

export default function Home() {
  const { t } = useTranslation();
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv/CV_CarlosMonterrey.pdf'; 
    link.download = 'carlomonterreycv.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{t('SOFTWARE_DEV')}</span>
            <h1 className="h1 mb-6">
              <span className="text-6xl">{t('HELLO_I_AM')}</span>
              <br />
              <span className="text-accent text-6xl">{t('NAME')}</span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80 text-xl">
              {t('DESCRIPTION')}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-5">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 bg-primary border-accent text-accent hover:bg-accent hover:text-primary"
                onClick={handleDownload}
              >
                <span>{t('DOWNLOAD_CV')}</span>
                <IoMdDownload className='text-xl' />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6 items-center justify-center h-16" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}