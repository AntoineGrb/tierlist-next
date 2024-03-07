import React from 'react';
import Image from 'next/image';

const Board = () => {

    return (
        <div className=' bg-[#1a1a18] border-2 border-black'>
            <div className='flex w-full min-h-24 border-b-2 border-black'>
                <div className='w-1/4 flex justify-center items-center bg-tier-s p-3'>
                    <p className='text-black leading-4'> Champions du monde toutes catégories </p>
                </div>
                <div className=' flex gap-1 flex-wrap justify-start items-center p-3'>
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                </div>
            </div>
            <div className='flex w-full h-24 border-b-2 border-black'>
                <div className='w-1/4 h-full flex justify-center items-center bg-tier-a'>
                    <p className='text-black'> A </p>
                </div>
                <div className='h-full flex justify-start items-center pl-2'>
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                </div>
            </div>
            <div className='flex w-full h-24 border-b-2 border-black'>
                <div className='w-1/4 h-full flex justify-center items-center bg-tier-b'>
                    <p className='text-black'> B </p>
                </div>
                <div className='h-full flex justify-start items-center pl-2'>
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                </div>
            </div>
            <div className='flex w-full h-24 border-b-2 border-black'>
                <div className='w-1/4 h-full flex justify-center items-center bg-tier-c'>
                    <p className='text-black'> C </p>
                </div>
                <div className='h-full flex justify-start items-center pl-2'>
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                </div>
            </div>
            <div className='flex w-full h-24 border-b-2 border-black'>
                <div className='w-1/4 h-full flex justify-center items-center bg-tier-d'>
                    <p className='text-black'> D </p>
                </div>
                <div className='h-full flex justify-start items-center pl-2'>
                    <Image src={"/assets/test/langages/javascript.png"} alt='image' width={60} height={60} />
                </div>
            </div>
        </div>
    );
};

export default Board;