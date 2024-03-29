'use client';

import { ListProps, ItemProps, BoardItemsProps } from '../../lib/interfaces';
import React, {useState , useEffect} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDragAndDrop } from '@/src/hooks/useDragAndDrop';
import html2canvas from 'html2canvas';
import Board from '@/src/components/board/page';
import Choices from '@/src/components/choices/page';
import Button from '@/src/components/button/page';
import TierlistSkeleton from '@/src/components/tierlistSkeleton/page';
import ErrorMessage from '@/src/components/errorMessage/page';

const TierList = ({params} : {params: {listId: string}}) => {

    const listId = Number(params.listId); //Get listId from params

    //Init states and variables
    const [list, setList] = useState<ListProps>({ //Initial state of list
        id: 0,
        title: "",
        description: "",
        cardImageUrl: "",
        items: [],
        category: "",
        isPopular: false,
    });
    const [boardItems, setBoardItems] = useState<BoardItemsProps>({ //Initial state of boardItems with empty categories arrays
        S: [],
        A: [],
        B: [],
        C: [],
        D: [], 
    });
    const [choicesItems, setChoicesItems] = useState<ItemProps[]>(list.items); //Initial state of choicesItems with list items
    const [initialChoices, setInitialChoices] = useState<ItemProps[]>(list.items); //Initial state of initialChoices with list items, to allow reset
    const [capturedImage, setCapturedImage] = useState<string[]>([]); //State to store the captured image of the tier list
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    //! Sortir le fetchData dans un hook ?
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            try {
                const response = await fetch(`/api/getList?id=${listId}`);

                if (!response.ok) {
                    console.log('List does not exist');
                    setIsError(true);
                    return;
                }

                const data = await response.json();
                setList(data);
                setInitialChoices(data.items);
                setChoicesItems(data.items);

            } catch (error) {
                console.log('Error to get list');
                setIsError(true);
                
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [listId]);

    //Get onDragEnd function from useDragAndDrop hook
    const { onDragEnd } = useDragAndDrop(boardItems, setBoardItems, choicesItems, setChoicesItems);

    const resetBoard = () => {
        setBoardItems({
            S: [],
            A: [],
            B: [],
            C: [],
            D: [],
        });
        setChoicesItems(initialChoices);
    }

    const screenshotList = () => { 
        const boardElement = document.getElementById('board');
        if (boardElement) {
            html2canvas(boardElement).then((canvas) => {
                const imageDataUrl = canvas.toDataURL('image/png'); //Convert canvas to image
                setCapturedImage((prevImages) => [...prevImages, imageDataUrl]);

                const imageWindow = window.open(); // Ouvrir une nouvelle fenêtre ou un nouvel onglet
                if (imageWindow) {
                    // Écrire le HTML pour afficher l'image dans la nouvelle fenêtre
                    imageWindow.document.write(`<img src="${imageDataUrl}" alt="Captured Image" style="max-width: 70vw; max-height: 95vh; display: block; margin: 0 auto;" />`);
                }

                console.log(capturedImage)
            })
        }
    }
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>

            <main className="bg-black min-h-screen w-full px-3 py-10 lg:pt-20">

                {isLoading ? <TierlistSkeleton /> : 
                 isError ? <ErrorMessage message='List does not exists !' /> : 
                 (
                    <>
                    <section className="pb-4 mb-4 lg:pb-12">
                        <h2 className=" pb-4 lg:pb-6 lg:text-5xl"> {list.title} </h2>
                        <p className=' text-justify lg:text-lg'> {list.description}</p>
                    </section>

                    <Board items={boardItems}/>
                    <Choices items={choicesItems} />     

                    <section className='flex flex-col gap-3 justify-center items-center mt-16 mb-32'>
                        <Button text='Reset list' action={resetBoard} />
                        <Button text='Screenshot list' action={screenshotList} />
                        <Button text='Save list' action={() => console.log('Sauvegarder la liste')} />
                    </section>
                    </>
                )}

            </main>
        </DragDropContext>
      );
};

export default TierList;