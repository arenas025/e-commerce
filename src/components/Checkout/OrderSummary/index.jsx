import './OrderSummary.scss'
import { useContext } from 'react'
import Context from '../../../context/Context'
import CartProductCart from '../../CartProductCart'

const OrderSummary = () => {
    const {state} = useContext(Context)
    const cart = state.cart
    const total = cart.length ? cart.reduce((a,b) => a + b.price,0) : 0
    const buyer = state.buyer
    return (
        <div className="orderSummary">
            <p>Order summary</p>
            <div className = 'orderSummary--products'>
                <p className = 'orderSummary--products__title'>Your products</p>
                {cart.map(item=> (
                    <CartProductCart key={item.id} item={item}/>
                ))}
                <div className='orderSummary--products__total'>
                    {cart.length !== 0 && <p>Total: {total}</p> }
                </div>
            </div>
            <div className='orderSummary--information'>
                    <p className='orderSummary--information__title'>Shipping Information</p>
                {buyer.map(item=>(
                    <>
                    <section className='orderSummary--information__name'>
                        <p>Name: </p>
                        <p>{` ${item.firstName} ${item.lastName}`}</p>
                    </section>
                    <section className='orderSummary--information__email'>
                        <p>Email: </p>
                        <p>{item.email}</p>
                    </section>
                    <section className='orderSummary--information__phone'>
                        <p>Phone: </p>
                        <p>{item.phone}</p>
                    </section>
                    <section className='orderSummary--information__country'>
                        <p>Address: </p>
                        <p>{item.country} {item.state} {item.city}</p>
                    </section>
                    </>
                ))}
            </div>
        </div>
    )
}

export default OrderSummary