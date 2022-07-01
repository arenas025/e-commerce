import './Products.scss'
import { products,cart,buyers } from "../../utils/api"
import Product from '../Product'

const Products = () => {
    return(
    <div className='products'>
        {products.map(product=>(
            <Product product={product}/>
        ))}
    </div>
    )
}

export default Products