import { ChoicesProps } from '../../../app/lib/interfaces';
import React from 'react';
import Image from 'next/image';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Choices = ({items, isMobile}: ChoicesProps) => {

    /* Pour le défilement horizontal, utiliser : flex flex-nowrap overflow-x-auto */

    return (
        <>
        <Droppable droppableId='choices' direction='horizontal'>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className={`fixed bottom-0 left-0 w-full min-h-20 flex overflow-x-auto bg-gray-200 shadow-md justify-start items-center gap-1 p-2 rounded-lg sm:relative sm:mt-1 sm:overflow-x-auto ${isMobile ? 'flex-nowrap pt-8' : 'flex-wrap'}`}>
                    {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="min-w-[65px]">
                                    <Image src={item.itemImageUrl} alt={item.name} width={isMobile ? 80 : 100} height={isMobile ? 80 : 100}  />
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
