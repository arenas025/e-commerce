import { useContext } from "react"
import Context from "../../context/Context"
import './Checkout.scss'

const Checkout  = () => {
    
    const{state} = useContext(Context)

    const cart = state.cart

    const totalPrice = cart.length !== 0 ? cart.reduce((acc, iter) => acc+iter.price,0) : 0

    return(
        <div className="checkout">
            {cart.length === 0 ? 
                <div className="checkout--notFound">
                    <p>
                        Oh, it seems you haven't purchased any product so far
                    </p>
                </div> :
                <div className="checkout--products">
                    {cart.map(item =>(
                    <div className="checkout--products__card">
                        <img src={item.image}/>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                    </div>
                ))}
                </div>
                }
        <p>Total:{totalPrice}</p>
        </div>
    )
}

export default Checkout