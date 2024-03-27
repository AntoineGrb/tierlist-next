import { ChoicesProps, ItemProps } from '../../../app/lib/interfaces';
import React from 'react';
import Image from 'next/image';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Choices = ({items, isMobile}: ChoicesProps) => {

    /* Pour le défilement horizontal, utiliser : flex flex-nowrap overflow-x-auto */

    return (
        <>
        <Droppable droppableId='choices' direction='horizontal'>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='fixed bottom-0 w-full max-h-3 flex-wrap bg-gray-200 shadow-md overflow-x-scroll flex justify-start items-center gap-1 p-2 rounded-lg sm:relative sm:mt-1 sm:overflow-x-auto'>
                    {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <Image src={item.itemImageUrl} alt={item.name} width={isMobile ? 65 : 80} height={isMobile ? 65 : 80} />
                                </div>
                            )}
                        </Draggable>
                    ))}
                </div>        
            )}
        </Droppable>
        </>
    );
};

export default Choices;
