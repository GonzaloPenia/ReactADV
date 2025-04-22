import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components" 
import '../styles/custom-styles.css';
const product = {
    id: '1',
    title: 'CoffeXL',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <ProductCard product={product} className="bg-dark">
              <ProductCard.Image className="custom-image"/>
              <ProductCard.Title title={'asdasdad'} className="text-white" />
              <ProductCard.Buttons className="custom-buttons"/>
            </ProductCard> 

            <ProductCard product={product} className="bg-dark" >
              <ProductImage className="custom-image" />
              <ProductTitle title={'asdasdad'} className="text-white" />
              <ProductButtons className="custom-buttons"/>
            </ProductCard> 

            <ProductCard product={product} style={{ backgroundColor: '#70D1F8'}}>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons/>
            </ProductCard> 
        </div>

    </div>
  )
}

export default ShoppingPage