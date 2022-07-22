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
	}

	const removeFromCart = payload => {
		const stateSorted = state.cart.sort((a,b)=> a-b )
		const index = stateSorted.findIndex(item => item === payload)
		stateSorted.splice(index,1)
		setState({
			...state,
			cart:[...stateSorted]
		})
	}

	const addBuyer = payload => {
		setState({
			...state,
			buyer: [...state.buyer, payload]
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
		removeFromCart,
		state
	}
}

export default useInitialState