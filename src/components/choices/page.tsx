import { ChoicesProps } from '../../../app/lib/interfaces';
import React from 'react';
import Image from 'next/image';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useMediaQuery } from 'usehooks-ts';

const Choices = ({items}: ChoicesProps) => {

    const isMobile = useMediaQuery('(max-width: 640px)');

    return (
        <>
        <Droppable droppableId='choices' direction='horizontal'>
            {(provided) => (
                <div 
                    ref={provided.innerRef} {...provided.droppableProps} 
                    className={`fixed bottom-0 left-0 w-full min-h-20 flex flex-nowrap overflow-x-auto bg-gray-200 shadow-md justify-start items-center gap-1 p-2 pt-8 rounded-t-md sm:rounded-lg sm:relative sm:mt-1 sm:overflow-x-auto sm:flex-wrap`}
                >
                    {items.map((item, index) => ( 
                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="min-w-[80px]">
                                    <Image src={item.itemImageUrl} alt={item.name} width={isMobile ? 80 : 95} height={isMobile ? 80 : 95}  />
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
