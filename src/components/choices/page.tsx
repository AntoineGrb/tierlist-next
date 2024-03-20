import React from 'react';
import Image from 'next/image';
import { Droppable, Draggable } from 'react-beautiful-dnd';


interface ChoicesProps { 
    items: itemProps[],
    isMobile: boolean;
}

interface itemProps {
    id: string;
    name: string;
    src: string;
}

const Choices = ({items, isMobile}: ChoicesProps) => {

    return (
        <>
        <Droppable droppableId='choices' direction='horizontal'>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='fixed bottom-0 w-full flex-wrap bg-gray-200 shadow-md overflow-x-scroll flex justify-start items-center gap-2 p-3 sm:relative sm:mt-1 sm:overflow-x-auto'>
                    {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <Image src={item.src} alt={item.name} width={isMobile ? 50 : 70} height={isMobile ? 50 : 70} />
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