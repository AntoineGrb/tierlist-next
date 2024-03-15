'use client';

import React, {useState , useEffect} from 'react';
import { DragDropContext, DropResult, Droppable, Draggable } from 'react-beautiful-dnd';
import Board from '@/src/components/board/page';
import Choices from '@/src/components/choices/page';
import Image from 'next/image';

interface Item {
    id: string;
    name: string;
    src: string;
}

const TierList = () => {

    //! A déplacer dans un fichier de données
    const items = [ 
        { id: '1', name: 'c-plus', src:'/assets/test/langages/c_plus.png' },
        { id: '2', name: 'c-sharp', src:'/assets/test/langages/c_sharp.jpg' },
        { id: '3', name: 'c', src:'/assets/test/langages/c.png' },
        { id: '4', name: 'java', src:'/assets/test/langages/java.png' },
        { id: '5', name: 'javascript', src:'/assets/test/langages/javascript.png' },
        { id: '6', name: 'php', src:'/assets/test/langages/php.png' },
        { id: '7', name: 'python', src:'/assets/test/langages/python.png' },
        { id: '8', name: 'ruby', src:'/assets/test/langages/ruby.png' },
        { id: '9', name: 'swift', src:'/assets/test/langages/swift.png' },
        { id: '10', name: 'typescript', src:'/assets/test/langages/typescript.png' },
    ]

    const [boardItems, setBoardItems] = useState<Item[]>([]);
    const [choicesItems, setChoicesItems] = useState<Item[]>(items);

    //Reorder items
    const reorder = (list: Item[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    //Move items between lists
    const move = (source: Item[], destination: Item[], droppableSource: any, droppableDestination: any) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        destClone.splice(droppableDestination.index, 0, removed);
        const result = { source: sourceClone, destination: destClone };
        return result;
    }

    //Handle end of drag and drop
    const onDragEnd = (result: DropResult) => { 
        const { source, destination } = result;

        // console.log('result.source.droppableId', result.source.droppableId);
        // console.log('result.destination.droppableId', result.destination.droppableId);
        // console.log('result.draggableId', result.draggableId); 

        //Dropped outside the list
        if (!destination) {
            return;
        }

        //Dropped in the same list
        if (source.droppableId === destination.droppableId) {
            if (source.droppableId === 'board') {
                const items = reorder(boardItems, source.index, destination.index);
                setBoardItems(items);

            } else {
                const items = reorder(choicesItems, source.index, destination.index);
                setChoicesItems(items);
            }

        } else {
            //Dropped from choices to board
            if (source.droppableId === 'choices' && destination.droppableId === 'board') {
                const result = move(choicesItems, boardItems, source, destination);
                setChoicesItems(result.source);
                setBoardItems(result.destination);

            } else {
                //Dropped from board to choices
                const result = move(boardItems, choicesItems, source, destination);
                setBoardItems(result.source);
                setChoicesItems(result.destination);
            }
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>

            <main className="bg-black min-h-screen px-3 py-10">
                <section className="pb-4 mb-4">
                    <h2 className=" pb-4"> Programming Languages </h2>
                    <p className=' text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit provident, at facere atque, rerum placeat modi distinctio illo culpa saepe dignissimos voluptates non voluptate, dolores quibusdam minus temporibus voluptatum quidem? Voluptates beatae similique, quia, possimus ad impedit esse velit molestiae molestias cupiditate, sint facilis quaerat alias repellendus amet adipisci.</p>
                </section>

                <Board items={boardItems} />
                <Choices items={choicesItems} />     

                <section className='flex flex-col gap-3 justify-center items-center mt-6 mb-32'>
                    <button className='bg-white text-black w-2/3 p-1 rounded-sm'>
                        Save
                    </button>
                    <button className='bg-white text-black w-2/3 p-1 rounded-sm'>
                        Reset
                    </button>
                </section>
                
            </main>
        </DragDropContext>
      );
};

export default TierList;