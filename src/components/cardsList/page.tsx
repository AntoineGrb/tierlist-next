import { CardsListProps } from '../../../app/lib/interfaces';
import React from 'react';
import Link from 'next/link';
import Card from '../card/page';

const CardsList = ({title, lists}: CardsListProps) => {

    return (
        <section className='py-3'>
            <h3 className='pb-4 text-3xl'> {title} </h3>
            <div className='flex gap-3 flex-nowrap overflow-x-auto'>
                {lists.map((list) => (
                    <Link href={`/tierlist/${list.id}`} key={list.id}>
                        <Card title={list.title} cardImageUrl={list.cardImageUrl} />
                    </Link>
                ))}
            </div>
      </section>
    );
};

export default CardsList;