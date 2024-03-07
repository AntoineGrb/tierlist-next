import React from 'react';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='px-4 py-6 bg-black flex items-center justify-between border-b-2 border-b-white'>
            <div className='flex items-center gap-2'>
                <Image
                    src='/assets/logo/logo test.png'
                    alt='logo'
                    width={30}
                    height={30}
                />
                <h1 className='font-bold uppercase text-white'> TIER LIST MAKER </h1>
            </div>
            <FaBars className='text-white text-2xl justify-self-end' />
        </header>
    );
};

export default Header;