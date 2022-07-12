import { useState } from 'react'
import api from '../utils/api'

const useInitialState = () => {
	const [searcherValue, setSearcherValue] = useState()

	const [state, setState] = useState(api)
	
    const addToCart = payload => {
		setState({
			...state,
			cart:[...state.cart,payload]
		})
		console.info('sirvió')
	}

	// console.info(`cart: ${cart}`)

	// const removeFromCart = payload => {
	//     setCartState(
	// need to think about it
	//     )
	// }

	const addBuyer = payload => {
		setState({
			state: [...state.buyers, payload]
		})
	}

	const handleSearcherValue = value => {
		setSearcherValue(value)
	}
	return {
		addToCart,
		addBuyer,
		searcherValue,
		handleSearcherValue,
		state
	}
}

export default useInitialState