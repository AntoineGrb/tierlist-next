'use client'

import Link from 'next/link';

export default function Menu() {

    return (
        <nav>
          <ul className={`p-2 flex gap-5`}>
              <li className='text-xl'> <Link href={'/'}>TEMPLATES</Link> </li>
              <li className='text-xl'> <Link href={'/new-template'}>CREATE TEMPLATE </Link> </li>
              <li className='text-xl'> <Link href={'/'}>LAST USER LISTS</Link> </li>
              <li className='text-xl'> <Link href={'/'}>LOGIN</Link> </li>
          </ul>
      </nav>
    );
}