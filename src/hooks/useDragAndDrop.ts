import React from 'react';
import { ItemProps, BoardItemsProps } from '../../app/lib/interfaces';
import { DropResult } from 'react-beautiful-dnd';

//Reorder items
const reorder = (list: ItemProps[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
}

//Handle end of drag and drop
export const useDragAndDrop = (
    boardItems: BoardItemsProps, 
    setBoardItems: React.Dispatch<React.SetStateAction<BoardItemsProps>>, 
    choicesItems: ItemProps[], 
    setChoicesItems: React.Dispatch<React.SetStateAction<ItemProps[]>>
    ) => { 
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
    return { onDragEnd };
}
