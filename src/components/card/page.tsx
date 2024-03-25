import { CardProps } from '../../../app/lib/interfaces';
import React from 'react';
import Link from 'next/link';

const Card = ({title, cardImageUrl}: CardProps) => {

    return (
        <article className=' w-40 aspect-square border border-white rounded-md flex justify-center items-end'>
            <div className="w-full h-1/3 border-none bg-gray-900/90 flex justify-center align-middle p-1">
                <p className=""> {title} </p>
            </div>
        </article>
    );
};

export default Card;