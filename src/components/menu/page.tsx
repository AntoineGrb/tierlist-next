'use client'

import Link from 'next/link';

export default function Menu() {

    return (
        <nav>
          <ul className={`p-2 flex gap-5`}>
              <li className=''> 
                <Link href={'/'}> <p className='text-xl hover:text-slate-200'> TEMPLATES </p></Link> 
              </li>
              <li className='text-xl'> 
                <Link href={'/new-template'}><p className='text-xl hover:text-slate-200'>CREATE TEMPLATE</p> </Link> 
              </li>
              <li className='text-xl'> 
                <Link href={'/'}><p className='text-xl hover:text-slate-200'>LAST USER LISTS</p></Link> 
              </li>
              <li className='text-xl'> 
                <Link href={'/'}><p className='text-xl hover:text-slate-200'>LOGIN</p></Link> 
              </li>
          </ul>
      </nav>
    );
}