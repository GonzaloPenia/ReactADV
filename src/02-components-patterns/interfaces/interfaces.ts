import { ReactElement, ReactNode } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactNode;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProp{
    counter: number;
    increaseBy: (value:number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):ReactElement,
    Title: ({ title }: { title?: string }) => ReactElement,
    Image: ({ img }: { img?: string }) => ReactElement,
    Buttons: () => ReactElement
}
