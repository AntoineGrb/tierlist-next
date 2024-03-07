'use client'

import React from 'react';
import Image from 'next/image';
import { useMenu } from '@/src/context/menuContext';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {

    const { toggleMenu , isMenuMobileOpen } = useMenu()!;

    //! Tester d'ajouter un icone de menu animé (cf. favoris Chrome)

    return (
    
        <header className='px-4 py-6 bg-black flex items-center justify-between border-b-2 border-b-white'>
            <div className='flex items-center gap-2'>
                <Image
                    src='/assets/logo/logo test.png'
                    alt='logo'
                    width={30}
                    height={30}
                />
                <h1 className='text-white'> S-TIER LIST </h1>
            </div>
            
            {!isMenuMobileOpen ? (
                <FaBars onClick={toggleMenu} className='text-white text-2xl justify-self-end' />
            ) : (
                <FaTimes onClick={toggleMenu} className='text-white text-2xl justify-self-end' />
            )}
        </header>
    );
};

export default Header;