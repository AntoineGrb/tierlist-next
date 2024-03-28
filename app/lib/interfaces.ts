//HOME PAGE
//Props for tierlists
export interface CardsListProps { 
    title: string; 
    lists: ListProps[];
}

export interface CardProps {
    title: string;
    cardImageUrl: string;
}

//Props for each tierlist
export interface ListProps {
    id: number | string;
    title: string;
    description: string;
    cardImageUrl: string;
    category: string;
    isPopular: boolean;
    items: ItemProps[];
}

//TIERLIST PAGE
//Props for choice's div
export interface ChoicesProps { 
    items: ItemProps[],
    isMobile: boolean;
}

//Props for board's div with tierlist's rows
export interface BoardProps {
    items: BoardItemsProps;
    isMobile: boolean;
}

export interface BoardItemsProps {
    S: ItemProps[];
    A: ItemProps[];
    B: ItemProps[];
    C: ItemProps[];
    D: ItemProps[];
}

//Props for selected items of the tierlist
export interface ItemProps {
    id: number;
    name: string;
    itemImageUrl: string;
}

export interface ButtonProps {
    text: string;
    action: () => void;
    style?: string;
}

//Error
export interface ErrorMessageProps {
    message: string
}


