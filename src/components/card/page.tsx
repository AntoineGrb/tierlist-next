import { CardProps } from '../../../app/lib/interfaces';
import React from 'react';

const Card = ({title, cardImageUrl}: CardProps) => {

    return (
        <article 
            className=' w-40 aspect-square border border-white rounded-md flex justify-center items-end'
            style={{backgroundImage: `url(${cardImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className="w-full h-1/3 border-none rounded-b-md rounded-l-md bg-gray-950/90 flex justify-center align-middle p-1">
                <p className=""> {title} </p>
            </div>
        </article>
    );
};

export default Card;