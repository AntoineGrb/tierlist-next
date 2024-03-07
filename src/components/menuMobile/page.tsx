'use client'

import Link from 'next/link';
import { useMenu } from '@/src/context/menuContext';

export default function MenuMobile() {

  const { isMenuMobileOpen } = useMenu()!;

  //! Problème avec la transition d'opacité => le menu doit disparaitre completement sinon il est cliquable

    return (
      <nav>
          <ul className={`bg-black z-10 absolute w-full p-4 border-b border-white flex flex-col gap-3 transition-opacity duration-100 ease-out ${isMenuMobileOpen ? 'opacity-100' : 'opacity-0'}`}>
              <li><Link href={'/'}>LOGIN</Link></li>
              <li><Link href={'/'}>CREATE TEMPLATE </Link></li>
              <li><Link href={'/'}>CATEGORIES</Link></li>
              <li><Link href={'/'}>LAST TIER LISTS</Link> </li>
          </ul>
      </nav>
    );
}