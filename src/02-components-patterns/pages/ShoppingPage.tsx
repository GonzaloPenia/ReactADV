import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components" 

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
            <ProductCard product={product}>
              <ProductImage/>
              <ProductTitle title={'asdasdad'}/>
              <ProductButtons/>
            </ProductCard>
        </div>

    </div>
  )
}

export default ShoppingPage