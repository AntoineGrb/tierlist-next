import React, { useState } from 'react';
import Image from 'next/image';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { getBackgroundColor } from '@/src/utils/styleFunctions';

interface BoardProps {
    items: BoardItems;
    isMobile: boolean;
}

interface BoardItems {
    S: ItemProps[];
    A: ItemProps[];
    B: ItemProps[];
    C: ItemProps[];
    D: ItemProps[];
}

interface ItemProps {
    id: string;
    name: string;
    src: string;
}

const Board = ({items, isMobile}: BoardProps) => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className='bg-[#1a1a18] border-2 border-black'>
            
        {/* Create a drop zone for each category of tier list */}
        {Object.entries(items).map(([category, categoryItems]) => (
            <Droppable droppableId={`board-${category}`} key={category} direction='horizontal'>
                {(provided, snapshot) => (
                    <div className='flex w-full min-w-24 min-h-24 border-b-2 border-black'>
                        <div className={`w-1/4 flex justify-center items-center ${getBackgroundColor(category)} p-3`}>
                            <p className='text-black'>{category}</p>
                        </div>
                        <div ref={provided.innerRef} {...provided.droppableProps} style={{backgroundColor: snapshot.isDraggingOver ? 'gray' : 'transparent',}} className='droppable-container w-3/4 flex justify-start items-center gap-2 p-2 flex-wrap'>
                            {categoryItems.map((item: ItemProps, index: number) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Image src={item.src} alt={item.name} width={isMobile ? 50 : 70} height={isMobile ? 50 : 70} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            
                        </div>
                    </div>
                )}
            </Droppable>
        ))}
    </div>
    );
};

export default Board;