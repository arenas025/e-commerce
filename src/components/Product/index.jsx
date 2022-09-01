import './Products.scss'
import { BsCartCheck } from "react-icons/bs"
import { useContext } from 'react'
import Context from '../../context/Context'

const Product = ({product}) => {
    
    const {addToCart} = useContext(Context) 

    const handleAddToCart = (item) => {
        addToCart(item)
    }

//     https://im.ge/i/OxiLl1
// https://im.ge/i/OxiDKP
// https://im.ge/i/Oxia2q
// https://im.ge/i/Oxi7wp

    console.info('./logo-diego.png')
    return(
        <div className="product">
            <img src={product.image}/>
            <div className="product--info">
                <p className="product--info__name">{product.name}</p>
                <p className="product--info__price">{`$ ${product.price}`}</p>
                <div className="product--info__description">
                    <p className="product--info__description__title">Descripción</p>
                    <p className="product--info__description__content" >
                    {product.description.materials}
                    </p>
                </div>
            </div>
            <div className='product--button' onClick={()=>handleAddToCart(product)}>
                <BsCartCheck className="product--button__icon"/>
                <button>Add to cart! </button>
                
            </div>
        </div>
    )
}

export default Product