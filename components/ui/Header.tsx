import Link from 'next/link';
import React from 'react';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';
import { Button } from './button';

interface HeaderProps {
  children?: React.ReactNode; // Define el tipo de children
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className='py-8 xl:py-12 text-white flex justify-between items-center'>
      <div className="container max-auto">
        {/* logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>Carlos Alfredo Perez Monterrey
            <span className='text-accent'>.</span>
          </h1>
        </Link>
      </div>
      {/* desktop nav & hire me button */}
      <div className="xl:flex hidden items-center gap-8">
        <Nav />
        <Link href='/contact'>
          <Button className='bg-zinc-950'>Hire me</Button>
        </Link>
      </div>
      {/* mobile nav */}
      <div className='xl:hidden'>
        <MobileNav />
      </div>
      {children} {/* Renderiza children aquí si es necesario */}
    </header>
  );
}