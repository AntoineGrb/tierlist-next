'use client'

import Link from 'next/link';
import { useMenu } from '@/src/context/menuContext';

export default function MenuMobile() {

  const { isMenuMobileOpen } = useMenu()!;

    return (

      isMenuMobileOpen && (
        <nav>
          <ul className={`bg-black z-10 absolute w-full p-4 border-b border-white flex flex-col gap-3`}>
              <li className='text-lg'> <Link href={'/'}>CREATE TEMPLATE </Link> </li>
              <li className='text-lg'> <Link href={'/'}>CATEGORIES</Link> </li>
              <li className='text-lg'> <Link href={'/'}>LAST TIER LISTS</Link> </li>
              <li className='text-lg'> <Link href={'/'}>LOGIN</Link> </li>
          </ul>
      </nav>
      )
    );
}