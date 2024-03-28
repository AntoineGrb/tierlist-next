'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import { useMenu } from '@/src/context/menuContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import Menu from '@/src/components/menu/page';

const Header = () => {

    const { toggleMenu , isMenuMobileOpen } = useMenu()!;
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
    
        <header className='px-4 py-6 bg-black flex items-center justify-between border-b-2 border-b-white'>
            <Link href={'/'}>
                <div className='flex items-center gap-2'>
                    <Image src='/assets/logo/logo1.png' alt='logo' width={30} height={30}/>
                    <h1 className='text-white'> S-TIER LIST </h1>
                </div>
            </Link>

            {isDesktop ? (
                <Menu />
            ) : (
                <div className='relative text-white text-2xl justify-self-end cursor-pointer'>
                     <FaBars onClick={toggleMenu} className={`absolute text-white text-2xl justify-self-end cursor-pointer transition-opacity ease-in duration-400 ${isMenuMobileOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <FaTimes onClick={toggleMenu} className={`text-white text-2xl justify-self-end cursor-pointer transition-opacity ease-in duration-400 ${isMenuMobileOpen ? 'opacity-100' : 'opacity-0'}`} />
                </div>
            )}
        </header>
    );
};

export default Header;