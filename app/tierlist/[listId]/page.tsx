'use client';

import { ListProps, ItemProps, BoardItemsProps } from '../../lib/interfaces';
import React, {useState , useEffect} from 'react';
import { DragDropContext, DropResult, Droppable, Draggable } from 'react-beautiful-dnd';
import { useMediaQuery } from 'usehooks-ts';
import Board from '@/src/components/board/page';
import Choices from '@/src/components/choices/page';
import Button from '@/src/components/button/page';

const TierList = ({params} : {params: {listId: string}}) => {

    const isMobile = useMediaQuery('(max-width: 640px)');
    const listId = Number(params.listId);
    console.log('listId ', listId)

    const [list, setList] = useState<ListProps>({
        id: 0,
        title: "",
        description: "",
        cardImageUrl: "",
        items: [],
        category: "",
        isPopular: false,
    });

    const [boardItems, setBoardItems] = useState<BoardItemsProps>({
        S: [],
        A: [],
        B: [],
        C: [],
        D: [], 
    });
    const [choicesItems, setChoicesItems] = useState<ItemProps[]>(list.items);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/getList?id=${listId}`);

            if (!response.ok) {
                console.log('Error to get list')
                return;
            }

            const data = await response.json();
            setList(data);
            setChoicesItems(data.items);
        };
        fetchData();
    }, [listId]);

    //Reorder items
    const reorder = (list: ItemProps[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    //Move items between lists
    //!Unused
    // const move = (source: ItemProps[], destination: ItemProps[], droppableSource: any, droppableDestination: any) => {
    //     const sourceClone = Array.from(source);
    //     const destClone = Array.from(destination);
    //     const [removed] = sourceClone.splice(droppableSource.index, 1);
    //     destClone.splice(droppableDestination.index, 0, removed);
    //     const result = { source: sourceClone, destination: destClone };
    //     return result;
    // }

    //Handle end of drag and drop
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;
    
        if (!destination) {
            return;
        }

        let newBoardItems: BoardItemsProps = { ...boardItems };

        if (source.droppableId === 'choices' && destination.droppableId.startsWith('board-')) {
            // Déplacement de Choices vers Board
            const removed = choicesItems.splice(source.index, 1)[0];
            const category = destination.droppableId.split('-')[1] as keyof BoardItemsProps;
            const newBoardItems: BoardItemsProps = { ...boardItems };
            newBoardItems[category].splice(destination.index, 0, removed);
            setChoicesItems([...choicesItems]);
            setBoardItems(newBoardItems);
        } else if (destination.droppableId === 'choices' && source.droppableId.startsWith('board-')) {
            // Déplacement de Board vers Choices
            const removed = newBoardItems[source.droppableId.split('-')[1] as keyof BoardItemsProps].splice(source.index, 1)[0];
            choicesItems.splice(destination.index, 0, removed);
            setBoardItems(newBoardItems);
            setChoicesItems([...choicesItems]);
        } else if (source.droppableId.startsWith('board-') && destination.droppableId.startsWith('board-')) {
            // Déplacement entre différentes zones du Board
            const sourceCategory = source.droppableId.split('-')[1] as keyof BoardItemsProps; // Explicitly define the type of sourceCategory
            const destCategory = destination.droppableId.split('-')[1] as keyof BoardItemsProps; // Explicitly define the type of destCategory
            const removed = newBoardItems[sourceCategory].splice(source.index, 1)[0];
            newBoardItems[destCategory].splice(destination.index, 0, removed);
            setBoardItems(newBoardItems);
        } else {
            let newItems;
            if (source.droppableId.startsWith('board-')) {
                const category = source.droppableId.split('-')[1];
                newItems = reorder(boardItems[category as keyof BoardItemsProps], source.index, destination.index);
                setBoardItems({ ...boardItems, [category]: newItems });
            } else {
                newItems = reorder(choicesItems, source.index, destination.index);
                setChoicesItems(newItems);
            }
        }
    };
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>

            <main className="bg-black min-h-screen px-3 py-10 lg:pt-20">
                <section className="pb-4 mb-4 lg:pb-12">
                    <h2 className=" pb-4 lg:pb-6 lg:text-5xl"> {list.title} </h2>
                    <p className=' text-justify lg:text-lg'> {list.description}</p>
                </section>

                <Board items={boardItems} isMobile={isMobile} />
                <Choices items={choicesItems} isMobile={isMobile} />     

                <section className='flex flex-col gap-3 justify-center items-center mt-16 mb-32'>
                    <Button text='Save' />
                    <Button text='Share' />
                </section>
                
            </main>
        </DragDropContext>
      );
};

export default TierList;