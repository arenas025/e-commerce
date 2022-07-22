import './Products.scss'
import { BsCartCheck } from "react-icons/bs"
import { useContext } from 'react'
import Context from '../../context/Context'

const Product = ({product}) => {
    
    const {addToCart} = useContext(Context) 

    const handleAddToCart = (item) => {
        addToCart(item)
    }

    return(
        <div className="product">
            <img src={product.image} alt='Product image'/>
            <div className="product--info">
                <p className="product--info__name">{product.name}</p>
                <p className="product--info__price">{`$ ${product.price}`}</p>
            </div>
            <div className='product--button' onClick={()=>handleAddToCart(product)}>
                <BsCartCheck className="product--button__icon"/>
                <button>Add to cart! </button>
            </div>
        </div>
    )
}

export default Product