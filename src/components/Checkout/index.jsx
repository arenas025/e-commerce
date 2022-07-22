import { useContext } from "react"
import Context from "../../context/Context"
import './Checkout.scss'
import CartProductCart from "../CartProductCart"
import { IoBagCheckOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const Checkout  = () => {

    const{state} = useContext(Context)

    let cart = state.cart

    const totalPrice = cart.length !== 0 ? cart.reduce((acc, iter) => acc+iter.price,0) : 0

    return(
        <div className="checkout">
        {cart.length !== 0 && <p className="checkout--title">Your products</p> }
            {cart.length === 0 ?
                <div className="checkout--notFound">
                    <p>
                        Oh, it seems you haven't purchased any product so far
                    </p>
                </div> :
                <div className="checkout--products">
                    {cart.map(item =>(
                    <CartProductCart item={item}/>
                ))}
                </div>
                }
        {cart.length !== 0 && <div className="checkout--checkout">
        <p className="checkout--checkout__total">
            Total: $ {totalPrice}
        </p>
        <Link to='/information'>
        <div className="checkout--checkout__button">
            <IoBagCheckOutline/>
            <p>Checkout</p>
        </div>
        </Link>
        </div> }
        </div>
    )
}

export default Checkout