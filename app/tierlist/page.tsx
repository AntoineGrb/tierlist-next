import React from 'react';
import Board from '@/src/components/board/page';
import Choices from '@/src/components/choices/page';

const TierList = () => {

    return (
        <main className="bg-black min-h-screen px-3 py-10">
            <section className="pb-4 mb-4">
                <h2 className=" pb-4"> Programming Languages </h2>
                <p className=' text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit provident, at facere atque, rerum placeat modi distinctio illo culpa saepe dignissimos voluptates non voluptate, dolores quibusdam minus temporibus voluptatum quidem? Voluptates beatae similique, quia, possimus ad impedit esse velit molestiae molestias cupiditate, sint facilis quaerat alias repellendus amet adipisci.</p>
            </section>
            <Board />
            <Choices />
            <section className='flex flex-col gap-3 justify-center items-center mt-6 mb-32'>
                <button className='bg-white text-black w-2/3 p-1 rounded-sm'>
                    Save
                </button>
                <button className='bg-white text-black w-2/3 p-1 rounded-sm'>
                    Reset
                </button>
            </section>
        </main>
      );
};

export default TierList;