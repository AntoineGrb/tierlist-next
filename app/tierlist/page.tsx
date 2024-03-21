'use client';

import React, {useState , useEffect} from 'react';
import { DragDropContext, DropResult, Droppable, Draggable } from 'react-beautiful-dnd';
import { useMediaQuery } from 'usehooks-ts';
import Board from '@/src/components/board/page';
import Choices from '@/src/components/choices/page';
import items from '@/src/data/lists/programming/items';

interface Item {
    id: string;
    name: string;
    src: string;
}

interface BoardItems {
    S: Item[];
    A: Item[];
    B: Item[];
    C: Item[];
    D: Item[];
}

interface BoardProps {
    items: BoardItems;
}

const TierList = () => {

    const [boardItems, setBoardItems] = useState<BoardItems>({
        S: [],
        A: [],
        B: [],
        C: [],
        D: [], 
    });
    const [choicesItems, setChoicesItems] = useState<Item[]>(items);

    const isMobile = useMediaQuery('(max-width: 640px)');

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
    
        if (!destination) {
            return;
        }

        let newBoardItems: BoardItems = { ...boardItems };

        if (source.droppableId === 'choices' && destination.droppableId.startsWith('board-')) {
            // Déplacement de Choices vers Board
            const removed = choicesItems.splice(source.index, 1)[0];
            const category = destination.droppableId.split('-')[1] as keyof BoardItems;
            const newBoardItems: BoardItems = { ...boardItems };
            newBoardItems[category].splice(destination.index, 0, removed);
            setChoicesItems([...choicesItems]);
            setBoardItems(newBoardItems);
        } else if (destination.droppableId === 'choices' && source.droppableId.startsWith('board-')) {
            // Déplacement de Board vers Choices
            const removed = newBoardItems[source.droppableId.split('-')[1] as keyof BoardItems].splice(source.index, 1)[0];
            choicesItems.splice(destination.index, 0, removed);
            setBoardItems(newBoardItems);
            setChoicesItems([...choicesItems]);
        } else if (source.droppableId.startsWith('board-') && destination.droppableId.startsWith('board-')) {
            // Déplacement entre différentes zones du Board
            const sourceCategory = source.droppableId.split('-')[1] as keyof BoardItems; // Explicitly define the type of sourceCategory
            const destCategory = destination.droppableId.split('-')[1] as keyof BoardItems; // Explicitly define the type of destCategory
            const removed = newBoardItems[sourceCategory].splice(source.index, 1)[0];
            newBoardItems[destCategory].splice(destination.index, 0, removed);
            setBoardItems(newBoardItems);
        } else {
            let newItems;
            if (source.droppableId.startsWith('board-')) {
                const category = source.droppableId.split('-')[1];
                newItems = reorder(boardItems[category as keyof BoardItems], source.index, destination.index);
                setBoardItems({ ...boardItems, [category]: newItems });
            } else {
                newItems = reorder(choicesItems, source.index, destination.index);
                setChoicesItems(newItems);
            }
        }
    };
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>

            <main className="bg-black min-h-screen px-3 py-10">
                <section className="pb-4 mb-4">
                    <h2 className=" pb-4"> Programming Languages </h2>
                    <p className=' text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit provident, at facere atque, rerum placeat modi distinctio illo culpa saepe dignissimos voluptates non voluptate, dolores quibusdam minus temporibus voluptatum quidem? Voluptates beatae similique, quia, possimus ad impedit esse velit molestiae molestias cupiditate, sint facilis quaerat alias repellendus amet adipisci.</p>
                </section>

                <Board items={boardItems} isMobile={isMobile} />
                <Choices items={choicesItems} isMobile={isMobile} />     

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