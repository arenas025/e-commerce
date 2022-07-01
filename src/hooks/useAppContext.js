import { buyers, products, cart } from "../utils/api";
import useState  from "react";

const useAppContext = () => {
    const [productsState, setProductsState] = useState(products)
    const [cartState, setCartState] = useState(cart)
    const [buyersState, setBuyersState] = useState(buyers)

    const addToCart = payload => {
        setCartState({
            cart:[...cart,payload]
        })
    }

    // const removeFromCart = payload => {
    //     setCartState(
    //need to think about it 
    //     )
    // }

    const addBuyer = payload => {
        setBuyersState({
            buyers:[...buyers, payload]
        })
    }

    return{addToCart,addBuyer}
}

export default useAppContext