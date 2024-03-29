'use client';

import { ListProps, ItemProps, BoardItemsProps } from '../../lib/interfaces';
import React, {useState , useEffect} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDragAndDrop } from '@/src/hooks/useDragAndDrop';
import { useScreenshot } from '@/src/hooks/useScreenshot';
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
    const [initialChoices, setInitialChoices] = useState<ItemProps[]>([]); //Initial state of initialChoices with list items, to allow reset
    //! Ce state devra etre dans le contexte utilisateur
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

    //Get exported function from hooks
    const { onDragEnd } = useDragAndDrop(boardItems, setBoardItems, choicesItems, setChoicesItems); //Get dragAndDrop function to handle item's drag and drop
    const { screenshotList } = useScreenshot(capturedImage, setCapturedImage); //Get screenshot function to take a screenshot of the tier list

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

                    <section className='flex flex-col gap-4 justify-center items-center mt-12 mb-32'>
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