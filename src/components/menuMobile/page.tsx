'use client'

import Link from 'next/link';
import { useMenu } from '@/src/context/menuContext';

export default function MenuMobile() {

  const { isMenuMobileOpen, toggleMenu } = useMenu()!;

    return (
      <nav className={`bg-black z-10 absolute w-full transition-all ease-in-out duration-500 overflow-hidden ${isMenuMobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <ul className='p-4 border-b border-white flex flex-col gap-3'>
            <li className='text-lg'> 
              <Link onClick={toggleMenu} href={'/'}>LOGIN</Link> 
            </li>
            <li className='text-lg'>
               <Link onClick={toggleMenu} href={'/'}>TEMPLATES</Link> 
            </li>
            <li className='text-lg'>
               <Link onClick={toggleMenu} href={'/new-template'}>CREATE TEMPLATE </Link> 
            </li>
            <li className='text-lg'>
               <Link onClick={toggleMenu} href={'/'}>LAST USER LISTS</Link> 
            </li>
          </ul>
      </nav>
    );
}
