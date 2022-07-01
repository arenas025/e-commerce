import './Products.scss'
import { BsCartCheck } from "react-icons/bs"


const Product = ({product, handleAddToCart}) => {
    return(
        <div className="product">
            <img src={product.image}/>
            <div className="product--info">
                <p className="product--info__name">{product.name}</p>
                <p className="product--info__price">{product.price}</p>
            </div>
            <div className='product--button'>
                <BsCartCheck className="product--button__icon"/>
                <button onClick={handleAddToCart}>¡Me lo llevo!</button>
            </div>
        </div>
    )
}

export default Product