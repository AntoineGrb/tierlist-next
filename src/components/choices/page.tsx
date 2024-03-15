import React from 'react';
import Image from 'next/image';
import { Droppable, Draggable } from 'react-beautiful-dnd';

interface ChoicesProps { 
    items: itemProps[]
}

interface itemProps {
    id: string;
    name: string;
    src: string;
}

const Choices = ({items}: ChoicesProps) => {

    return (
        <>
        <Droppable droppableId='choices' direction='horizontal'>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='fixed bottom-0 w-full h-28 bg-gray-200 shadow-md overflow-x-scroll flex justify-start items-center gap-2 px-3 '>
                    {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <>
                                    <Image src={item.src} alt={item.name} width={60} height={60} />
                                    </>
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