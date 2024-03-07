'use client'

import Link from 'next/link';
import { useMenu } from '@/src/context/menuContext';

export default function MenuMobile() {

  const { isMenuMobileOpen } = useMenu()!;

    return (
      <nav>
          <ul className={`bg-black z-10 absolute w-full p-4 border-b border-white flex flex-col gap-3 transition-opacity duration-100 ease-out ${isMenuMobileOpen ? 'opacity-100' : 'opacity-0'}`}>
              <li><Link href={'/'}>Login</Link></li>
              <li><Link href={'/'}>Create a template </Link></li>
              <li><Link href={'/'}>Categories</Link></li>
              <li><Link href={'/'}>Last tierlists</Link> </li>
          </ul>
      </nav>
    );
}