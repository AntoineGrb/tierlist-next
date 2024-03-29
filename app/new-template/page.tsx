'use client';

import { ItemProps, BoardItemsProps } from '../lib/interfaces';
import React, {useState , useEffect} from 'react';
import { DragDropContext} from 'react-beautiful-dnd';
import { useDragAndDrop } from '@/src/hooks/useDragAndDrop';
import { useScreenshot } from '@/src/hooks/useScreenshot';
import Board from '@/src/components/board/page';
import Choices from '@/src/components/choices/page';
import Button from '@/src/components/button/page';

const TierList = () => {

    const [boardItems, setBoardItems] = useState<BoardItemsProps>({ //Initial state of boardItems with empty categories arrays
        S: [],
        A: [],
        B: [],
        C: [],
        D: [], 
    });
    const [choicesItems, setChoicesItems] = useState<ItemProps[]>([]); //Initial state of choicesItems with list items
    const [initialChoices, setInitialChoices] = useState<ItemProps[]>([]); //Initial state of initialChoices with list items, to allow reset
    const [templateInfos, setTemplateInfos] = useState({
        title:'Your template title',
        description: 'Describe your template here',
    })
    //! Ce state devra etre dans le contexte utilisateur
    const [capturedImage, setCapturedImage] = useState<string[]>([]); //State to store the captured image of the tier list

    //Get exported function from hooks
    const { onDragEnd } = useDragAndDrop(boardItems, setBoardItems, choicesItems, setChoicesItems); //Get dragAndDrop function to handle item's drag and drop
    const { screenshotList } = useScreenshot(capturedImage, setCapturedImage); //Get screenshot function to take a screenshot of the tier list

    //Handle template's title & description modify by user
    const handleTemplateInfosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemplateInfos({...templateInfos, [e.target.name]: e.target.value})
    }

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

                <section className=" flex flex-col pb-4 mb-4 lg:pb-12">
                    <input 
                        name='title' 
                        value={templateInfos.title} 
                        onChange={handleTemplateInfosChange} 
                        className='bg-black text-white font-oswald text-3xl pb-4 lg:pb-6 lg:text-5xl' 
                    />
                    <input 
                        name='description' 
                        value={templateInfos.description} 
                        onChange={handleTemplateInfosChange} 
                        className='bg-black text-white font-raleway text-base text-justify lg:text-lg' 
                    />
                </section>

                <Board items={boardItems} />
                <Choices items={choicesItems}/>  

                <section className='p-3 mt-3 border border-white rounded-lg flex justify-center'>
                    <input 
                        type='file' 
                        multiple 
                        onChange={handleFileChange} 
                        className='w-[127px]'
                        accept='.png, .jpg, .jpeg'
                    /> 
                </section> 
                <section className='flex flex-col gap-3 justify-center items-center mt-16 mb-32'>
                    <Button text='Reset list' action={resetBoard} />
                    <Button text='Screenshot list' action={screenshotList} />
                    <Button text='Save list' action={() => console.log('Sauvegarder la liste')} />
                </section>

            </main>
        </DragDropContext>
      );
};

export default TierList;