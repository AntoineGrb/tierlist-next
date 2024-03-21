export interface ListsProps {
    lists: ListProps[];
}
  
export interface ListProps {
    id: number;
    title: string;
    description: string;
    cardImageUrl: string;
    items: ItemProps[];
}
  
export interface ItemProps {
    id: number;
    name: string;
    itemImageUrl: string;
}