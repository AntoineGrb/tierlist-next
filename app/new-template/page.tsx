'use client';

import { ListProps, ItemProps, BoardItemsProps } from '../lib/interfaces';
import React, {useState , useEffect} from 'react';
import { DragDropContext, DropResult, Droppable, Draggable } from 'react-beautiful-dnd';
import { useMediaQuery } from 'usehooks-ts';
import Board from '@/src/components/board/page';
import Choices from '@/src/components/choices/page';
import Button from '@/src/components/button/page';

const TierList = ({params} : {params: {listId: string}}) => {

    const isMobile = useMediaQuery('(max-width: 640px)');

    const [boardItems, setBoardItems] = useState<BoardItemsProps>({ //Initial state of boardItems with empty categories arrays
        S: [],
        A: [],
        B: [],
        C: [],
        D: [], 
    });
    const [choicesItems, setChoicesItems] = useState<ItemProps[]>([]); //Initial state of choicesItems with list items
    const [initialChoices, setInitialChoices] = useState<ItemProps[]>([]); //Initial state of initialChoices with list items, to allow reset

    //Handle file input change
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const files = e.target.files ? Array.from(e.target.files) : [];
        const newItems = files.map(file => ({
            id: Math.floor(Math.random() * 1000), //! A modifier
            name: file.name,
            itemImageUrl: URL.createObjectURL(file)
        }))
        setInitialChoices([...newItems]); // Mise à jour pour refléter l'état initial après chargement
        setChoicesItems([...newItems]);
    }

    //Reorder items
    //! Handle drag and drop in utils functions
    const reorder = (list: ItemProps[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    //Handle end of drag and drop
    //! Handle drag and drop in utils functions
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

    const resetBoard = () => {
        setBoardItems({
            S: [],
            A: [],
            B: [],
            C: [],
            D: [],
        });
        setChoicesItems([...initialChoices]);
    }
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>

            <main className="bg-black min-h-screen w-full px-3 py-10 lg:pt-20">

                <section className="pb-4 mb-4 lg:pb-12">
                    <h2 className=" pb-4 lg:pb-6 lg:text-5xl"> Titre à modifier </h2>
                    <p className=' text-justify lg:text-lg'> Description à modifier </p>
                </section>

                <Board items={boardItems} isMobile={isMobile} />
                <Choices items={choicesItems} isMobile={isMobile}/>  

                <section className='p-3 mt-3 border border-white rounded-lg'>
                    <input type='file' multiple onChange={handleFileChange} className='w-full'></input>
                </section> 
                <section className='flex flex-col gap-3 justify-center items-center mt-16 mb-32'>
                    <Button text='Reset your list' action={resetBoard} />
                    <Button text='Save your list' action={() => console.log('Sauvegarder la liste')} />
                </section>

            </main>
        </DragDropContext>
      );
};

export default TierList;