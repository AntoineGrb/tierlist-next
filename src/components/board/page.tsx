import { BoardProps, ItemProps } from '../../../app/lib/interfaces';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { getBackgroundColor } from '@/src/utils/styleFunctions';

const Board = ({items, isMobile}: BoardProps) => {

    const [categoryNames, setCategoryNames] = useState<{[key: string]: string}>({S:'S', A:'A', B:'B', C:'C', D:'D'});

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>, oldCategoryName: string) => { 
        const newCategoryName = e.target.value;
        setCategoryNames(prev => ({...prev, [oldCategoryName]: newCategoryName}));
    }

    return (
        <div className='bg-[#1a1a18] border-2 border-black'>
            
        {/* Create a drop zone for each category of tier list */}
        {Object.entries(items).map(([category, categoryItems]) => (
            <Droppable droppableId={`board-${category}`} key={category} direction='horizontal'>
                {(provided, snapshot) => (
                    <div className='flex w-full min-w-24 min-h-[125px] border-b-2 border-black sm:min-h-[150px]'>
                        <div className={`w-1/4 flex  justify-center items-center ${getBackgroundColor(category)} p-3`}>
                            <input 
                                value={categoryNames[category]} 
                                onChange={e => handleCategoryChange(e, category)} 
                                className='bg-transparent h-12 text-black font-oswald text-sm flex text-center' 
                            />
                        </div>
                        <div ref={provided.innerRef} {...provided.droppableProps} style={{backgroundColor: snapshot.isDraggingOver ? 'gray' : 'transparent',}} className='droppable-container w-3/4 flex justify-start items-center gap-1 p-1 flex-wrap'>
                            {categoryItems.map((item: ItemProps, index: number) => (
                                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Image src={item.itemImageUrl} alt={item.name} width={isMobile ? 80 : 100} height={isMobile ? 80 : 100} />
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