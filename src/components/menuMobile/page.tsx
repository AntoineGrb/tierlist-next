'use client'

import Link from 'next/link';
import { useMenu } from '@/src/context/menuContext';

export default function MenuMobile() {

  const { isMenuMobileOpen } = useMenu()!;

    return (

      isMenuMobileOpen && (
        <nav>
          <ul className={`z-10 absolute w-full p-4 border-b border-white flex flex-col gap-3 transition-opacity duration-100 ease-out`}>
              <li className='text-lg'> <Link href={'/'}>LOGIN</Link> </li>
              <li className='text-lg'> <Link href={'/'}>CREATE TEMPLATE </Link> </li>
              <li className='text-lg'> <Link href={'/'}>CATEGORIES</Link> </li>
              <li className='text-lg'> <Link href={'/'}>LAST TIER LISTS</Link> </li>
          </ul>
      </nav>
      )
    );
}