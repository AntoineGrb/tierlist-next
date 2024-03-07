import React from 'react';
import Link from 'next/link';
import Item from '../item/page';

interface ItemsListProps { 
    title: string;
    
}

const ItemsList = ({title}: ItemsListProps) => {

    return (
        <section className='py-3'>
            <h3 className='pb-2'> {title} </h3>
            <div className='flex gap-3 flex-nowrap overflow-x-scroll'>
                <Item/>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
      </section>
    );
};

export default ItemsList;