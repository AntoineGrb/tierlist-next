import React from 'react';
import Link from 'next/link';
import Card from '../card/page';

const CardsList = () => {

    return (
        <section className='py-3'>
            <h3 className='pb-4 text-3xl'> Create your list </h3>
            <div className='flex gap-3 flex-nowrap overflow-x-auto'>
                <Link href={`/new-template`}>
                    <Card title='Make your own template' cardImageUrl='/assets/items/empty-list/plus.png' />
                </Link>
            </div>
      </section>
    );
};

export default CardsList;