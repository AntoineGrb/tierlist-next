import React from 'react';
import Image from 'next/image';
import { Droppable, Draggable } from 'react-beautiful-dnd';

interface BoardItems {
    S: ItemProps[];
    A: ItemProps[];
    B: ItemProps[];
    C: ItemProps[];
    D: ItemProps[];
}

interface BoardProps {
    items: BoardItems;
}

interface ItemProps {
    id: string;
    name: string;
    src: string;
}

const Board = ({items}: BoardProps) => {

    function getBackgroundColor(category: string) {
        switch (category.toLowerCase()) {
            case 's': return 'bg-tier-s';
            case 'a': return 'bg-tier-a';
            case 'b': return 'bg-tier-b';
            case 'c': return 'bg-tier-c';
            case 'd': return 'bg-tier-d';
            default: return ''; // Default case
        }
    }    

    return (
        <div className='bg-[#1a1a18] border-2 border-black'>
        {/* Pour chaque catégorie, créez une zone droppable */}
        {Object.entries(items).map(([category, categoryItems]) => (
            <Droppable droppableId={`board-${category}`} key={category} direction='horizontal'>
                {(provided) => (
                    <div className='flex w-full min-w-24 min-h-24 border-b-2 border-black'>
                        <div className={`w-1/4 flex justify-center items-center ${getBackgroundColor(category)} p-3`}>
                            <p className='text-black'>{category}</p>
                        </div>
                        <div ref={provided.innerRef} {...provided.droppableProps} className='w-3/4 flex justify-start items-center gap-2 p-2 flex-wrap'>
                            {categoryItems.map((item: ItemProps, index: number) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Image src={item.src} alt={item.name} width={60} height={60} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    </div>
                )}
            </Droppable>
        ))}
    </div>
    );
};

export default Board;