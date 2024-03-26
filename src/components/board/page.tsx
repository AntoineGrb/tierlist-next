import { BoardProps, ItemProps } from '../../../app/lib/interfaces';
import React from 'react';
import Image from 'next/image';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { getBackgroundColor } from '@/src/utils/styleFunctions';

const Board = ({items, isMobile}: BoardProps) => {

    return (
        <div className='bg-[#1a1a18] border-2 border-black'>
            
        {/* Create a drop zone for each category of tier list */}
        {Object.entries(items).map(([category, categoryItems]) => (
            <Droppable droppableId={`board-${category}`} key={category} direction='horizontal'>
                {(provided, snapshot) => (
                    <div className='flex w-full min-w-24 min-h-32 border-b-2 border-black'>
                        <div className={`w-1/4 flex justify-center items-center ${getBackgroundColor(category)} p-3`}>
                            <p className='text-black'>{category}</p>
                        </div>
                        <div ref={provided.innerRef} {...provided.droppableProps} style={{backgroundColor: snapshot.isDraggingOver ? 'gray' : 'transparent',}} className='droppable-container w-3/4 flex justify-start items-center gap-1 p-1 flex-wrap'>
                            {categoryItems.map((item: ItemProps, index: number) => (
                                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Image src={item.itemImageUrl} alt={item.name} width={isMobile ? 65 : 70} height={isMobile ? 65 : 70} />
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