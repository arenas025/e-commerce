import './Products.scss'
import Product from '../Product'
import { FaRegSadTear } from "react-icons/fa";
import { useContext } from 'react';
import Context from '../../context/Context';

const Products = () => {
    
    let search = []

    const {searcherValue, state} = useContext(Context)

    const value = searcherValue

    const products = state.products
    
    value === undefined ? search = [...products] : search = products.filter(item=> {
        return item.name.toLowerCase().includes(value.toLowerCase());
    })

    return(
    <div className='products'>
        {search.map(product=>(
            <Product product={product} />
        ))}
        {search.length === 0 &&
        <div className='productNotFound'>
            <p>
            Ups, it seems we don't have that product
            </p>
            <FaRegSadTear/>
        </div>}
    </div>
    )
}

export default Products