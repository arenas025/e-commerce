import './CartProductCart.scss'
import {MdRemoveCircle} from 'react-icons/md'
import { useContext } from 'react'
import Context from '../../context/Context'

const CartProductCart = ({item}) => {
    const{removeFromCart} = useContext(Context)

    return ( 
        <div className="cardProductCart">
            <img src={item.image}/>
            <div className="cardProductCart__info">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div className="cardProductCart__info__remove" onClick={()=>
                    removeFromCart(item)
                    }>
                    <MdRemoveCircle/>
                    <p>Remove</p>
                </div>
            </div>
        </div>
    )
}

export default CartProductCart
