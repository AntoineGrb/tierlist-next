'use client'

import Link from 'next/link';
import { useMenu } from '@/src/context/menuContext';

export default function MenuMobile() {

  const { isMenuMobileOpen } = useMenu()!;

  /* Return le menu dans tous les cas et remplace le nav par le code suivant : 
  <nav className={`absolute w-full z-10 bg-black p-4 border-b border-white flex flex-col gap-3
      transition-all ease-in-out duration-500 ${isMenuMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}> */

    return (
      <nav className={`bg-black z-10 absolute w-full transition-all ease-in-out duration-500 overflow-hidden ${isMenuMobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <ul className='p-4 border-b border-white flex flex-col gap-3'>
            <li className='text-lg'> <Link href={'/'}>LOGIN</Link> </li>
              <li className='text-lg'> <Link href={'/'}>TEMPLATES</Link> </li>
              <li className='text-lg'> <Link href={'/new-template'}>CREATE TEMPLATE </Link> </li>
              <li className='text-lg'> <Link href={'/'}>LAST USER LISTS</Link> </li>
          </ul>
      </nav>
    );
}
