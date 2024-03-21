import React from 'react';
import Link from 'next/link';

const Item = () => {

    return (
        <Link href={'/tierlist'} className='block'>
            <article
            className='w-32 aspect-square border border-white rounded-md flex justify-center items-end'
            >
                <div className="w-full h-1/3 border-none bg-gray-900/90 flex justify-center align-middle p-1">
                    <p className=""> Programmation </p>
                </div>
            </article>
        </Link>
    );
};

export default Item;