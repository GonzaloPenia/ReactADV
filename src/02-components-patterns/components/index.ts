import {ProductCard as ProductCardHOC} from './ProductCard'

import {ProductImage} from './ProductImage'
import {ProductTitle} from './ProductTitle'
import {ProductButtons} from './ProductButtons'

export * from './ProductTitle'
export * from './ProductButtons'
export * from './ProductImage'

export const ProductCard = Object.assign (ProductCardHOC, { 
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
 }) 

export default ProductCard;