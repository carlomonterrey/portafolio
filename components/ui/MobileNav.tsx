"use client";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { SheetTrigger, SheetContent, Sheet } from './sheet';
import Link from 'next/link';
import { ChangeLenguaje } from '../ChangeLenguaje';
import { useTranslation } from 'react-i18next';

const links = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/services' },
  { name: 'RESUME', path: '/resume' },
  { name: 'WORK', path: '/work' },
  { name: 'CONTACT', path: '/contact' }
];

export const MobileNav = () => {
  const { t } = useTranslation();

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); 

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className='flex justify-center items-center' onClick={() => setIsOpen(true)}>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='mt-32'>       <ChangeLenguaje ></ChangeLenguaje>
        </div>

        <div className='mt-32 mb-40 text-center text-2xl'></div>

        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map(link => (
            <Link  
              key={link.name} 
              className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize text-white`}
              href={link.path}
              onClick={handleLinkClick} 
            >
             {t(link.name)}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
    </>
  );
};