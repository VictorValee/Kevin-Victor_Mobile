export interface Recette {
    title: string;
    description: string;
    pictures: string[];
    id:string;
    category:string;
    createdAt : Date;
    avertageStar: number;
}