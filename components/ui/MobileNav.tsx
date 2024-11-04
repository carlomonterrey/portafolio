"use client";
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiMenuFries } from 'react-icons/ci'; // Asegúrate de que esta importación sea correcta
import { SheetTrigger, SheetContent ,Sheet} from './sheet'; // Asegúrate de que SheetContent esté importado
import Link from 'next/link';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' }
];

export const MobileNav = () => {
  const pathname=usePathname()
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='mt-32 mb-40 text-center text-2xl'></div>
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map(link => (
            <Link  
            key={link.name} 
            className={`${link.path===pathname&&"text-accennt border-b-2 border-accent" } text-xl capitalize text-white `}
            href={link.path}
            > {link.name}
            </Link>
          
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};