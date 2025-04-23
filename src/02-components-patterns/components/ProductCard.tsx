import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks';
import React, { createContext, ReactElement } from 'react';
import { ProductContextProp, Product, onChangeArgs } from '../interfaces/interfaces';


export const ProductContext = createContext( {} as ProductContextProp);
const {Provider} = ProductContext; 

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args : onChangeArgs) => void;
}

export const ProductCard = ({children, product, className, style, onChange}: Props) => {
    
    const {counter, increaseBy} = useProduct({onChange,product});

    return (
        <Provider value={{
                    counter,
                    increaseBy,
                    product
                }}>

                <div className={ `${styles.productCard} ${className}`} 
                     style = {style} >           
                    {children}
                </div>
        </Provider>
  )
}
