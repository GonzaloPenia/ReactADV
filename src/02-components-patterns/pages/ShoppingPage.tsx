import { BADHINTS } from "dns";
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components" 
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products [1]

export const ShoppingPage = () => {
  
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr />
        <div>
            <ProductCard 
                key={ product.id }
                product={ product }
                className="bg-dark text-white"
                initialValues={{
                  count: 4,
                  maxCount: 10
                }}
            >

              {
                  ({reset,count, isMaxCountReached,maxCount,increaseBy}) => (
                      <>
                        <ProductImage className="custom-image" />
                        <ProductTitle title={product.title} className="text-white" />
                        <ProductButtons className="custom-buttons"/>

                        {/* <button onClick={reset}>Reset</button>
                        <button onClick={()=>increaseBy(-2)}>-2</button>
                        {
                          (!isMaxCountReached && <button onClick={()=>increaseBy(+2)}>=2</button>)
                        }
                        <span>{count} - {maxCount}</span> */}
                      </>
                  )
              }
          </ProductCard> 
        </div>
          
    </div>
  )
}

export default ShoppingPage