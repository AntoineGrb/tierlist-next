import React from 'react';
import Image from 'next/image';

const Choices = () => {

    return (
        <div className='fixed bottom-0 w-full h-28 bg-gray-200 shadow-md overflow-x-scroll flex justify-start items-center gap-2 px-3 '>
            <Image src={"/assets/test/langages/javascript.png"} alt='image' width={50} height={50} />
            <Image src={"/assets/test/langages/javascript.png"} alt='image' width={50} height={50} />
            <Image src={"/assets/test/langages/javascript.png"} alt='image' width={50} height={50} />
            <Image src={"/assets/test/langages/javascript.png"} alt='image' width={50} height={50} />
            <Image src={"/assets/test/langages/javascript.png"} alt='image' width={50} height={50} />
            <Image src={"/assets/test/langages/javascript.png"} alt='image' width={50} height={50} />
            <Image src={"/assets/test/langages/javascript.png"} alt='image' width={50} height={50} />
            <Image src={"/assets/test/langages/javascript.png"} alt='image' width={50} height={50} />
            <Image src={"/assets/test/langages/javascript.png"} alt='image' width={50} height={50} />
            <Image src={"/assets/test/langages/javascript.png"} alt='image' width={50} height={50} />
        </div>
    );
};

export default Choices;