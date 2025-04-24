import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components" 
import { useShoppingCart } from "../hooks/useShoppingCard";
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  
  const {shoppingCart, onProductCountChange} = useShoppingCart();
  
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr />
          <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
          }}>

            {
                products.map( product  => (
                    <ProductCard 
                        key={ product.id }
                        product={ product }
                        className="bg-dark text-white"
                        onChange={ onProductCountChange }
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                    <ProductImage className="custom-image" />
                    <ProductTitle title={product.title} className="text-white" />
                    <ProductButtons className="custom-buttons"/>
                  </ProductCard> 
                ))
            }
          </div>
          <div  className="shopping-cart">
                
                {Object.entries(shoppingCart).map(([key, product]) =>
                      <ProductCard 
                          key={ product.id }
                          product={ product }
                          className="bg-dark text-white"
                          onChange={ onProductCountChange }
                          value={ shoppingCart[product.id]?.count || 0 }
                      >
                        
                        <ProductImage className="custom-image" />
                        <ProductTitle title={product.title} className="text-white" />
                        <ProductButtons className="custom-buttons" style={{display: "flex", justifyContent: 'center'}}  />
                    </ProductCard> 
                )}
                
          </div>

          <div>
            <code>
              { JSON.stringify(shoppingCart,null, 5) }
            </code>
          </div>
    </div>
  )
}

export default ShoppingPage