import React from 'react';
import Image from 'next/image';

interface ChoicesProps { 
    items: itemProps[]
}

interface itemProps {
    id: string;
    name: string;
    src: string;
}

const Choices = ({items}: ChoicesProps) => {

    return (
        <div className='fixed bottom-0 w-full h-28 bg-gray-200 shadow-md overflow-x-scroll flex justify-start items-center gap-2 px-3 '>
            {items.map((item, index) => (
                <div className=''>
                    <Image src={item.src} alt={item.name} width={60} height={60} />
                </div>
            ))}
        </div>
    );
};

export default Choices;