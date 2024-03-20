'use client'

import Link from 'next/link';

export default function MenuMobile() {


    return (
        <nav>
          <ul className={`p-2 flex gap-5`}>
              <li className='text-xl'> <Link href={'/'}>LOGIN</Link> </li>
              <li className='text-xl'> <Link href={'/'}>CREATE TEMPLATE </Link> </li>
              <li className='text-xl'> <Link href={'/'}>CATEGORIES</Link> </li>
              <li className='text-xl'> <Link href={'/'}>LAST TIER LISTS</Link> </li>
          </ul>
      </nav>
    );
}