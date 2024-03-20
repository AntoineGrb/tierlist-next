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

    //! Tester d'ajouter un icone de menu animé (cf. favoris Chrome)

    return (
    
        <header className='px-4 py-6 bg-black flex items-center justify-between border-b-2 border-b-white'>
            <Link href={'/'}>
                <div className='flex items-center gap-2'>
                    <Image src='/assets/logo/logo test.png' alt='logo' width={30} height={30}/>
                    <h1 className='text-white'> S-TIER LIST </h1>
                </div>
            </Link>

            {isDesktop ? (
                <Menu />
            ) : (
                <>
                    {!isMenuMobileOpen ? (
                        <FaBars onClick={toggleMenu} className='text-white text-2xl justify-self-end cursor-pointer' />
                    ) : (
                        <FaTimes onClick={toggleMenu} className='text-white text-2xl justify-self-end cursor-pointer' />
                    )}
                </>
            )}
        
        </header>
    );
};

export default Header;