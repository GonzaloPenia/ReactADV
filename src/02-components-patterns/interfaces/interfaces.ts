import { JSX, ReactElement, ReactNode } from "react";
import { Props as ProductCardProps} from "../components/ProductCard";
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductInCart extends Product{
  count : number
}

export interface ProductContextProp{
    counter: number;
    increaseBy: (value:number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ): JSX.Element ,
    Title:   (Props: ProductTitleProps) => JSX.Element,
    Image:   (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs{
    product: Product;
    count: number;
}
