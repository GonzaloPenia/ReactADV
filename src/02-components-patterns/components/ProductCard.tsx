import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks';
import { createContext } from 'react';
import { ProductContextProp, ProductCardProps } from '../interfaces/interfaces';


export const ProductContext = createContext( {} as ProductContextProp);
const {Provider} = ProductContext; 



export const ProductCard = ({children, product}: ProductCardProps) => {
    
    const {counter, increaseBy} = useProduct();

    return (
        <Provider value={{
                    counter,
                    increaseBy,
                    product
                }}>

                <div className={styles.productCard}>           
                    {children}
                </div>
        </Provider>
  )
}
