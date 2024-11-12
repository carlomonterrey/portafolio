import Link from 'next/link';
import React from 'react';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';
import { Button } from './button';
import { ChangeLenguaje } from '../ChangeLenguaje';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  children?: React.ReactNode; // Define el tipo de children
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className="container max-auto flex justify-between">
        {/* logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>Carlos  Monterrey
            <span className='text-accent'>.</span>
          </h1>
        </Link>
         {/* desktop nav & hire me button */}
      <div className="xl:flex hidden items-center gap-8">
        <Nav />
        <Link href='/contact'>
          <Button className='bg-zinc-950'>{t('HIREME')}</Button>
        </Link>
        <div>
        <ChangeLenguaje />
        </div>
      </div>
      {/* mobile nav */}
      <div className='xl:hidden'>

        <MobileNav />
      </div>
      {children} {/* Renderiza children aquí si es necesario */}
      </div>
     
    </header>
  );
}  