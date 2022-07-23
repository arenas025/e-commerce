import Layout from './src/components/Layout'
import Home from './src/components/Home'
import Context from './src/context/Context'
import {} from 'react'
import './App.scss'
import useInitialState from './src/hooks/useInitialState'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ShippingInformation from './src/components/Checkout/ShippingInformation'
import Checkout from './src/components/Checkout'
import OrderSummary from './src/components/Checkout/OrderSummary'

const App = () => {

    const initialState = useInitialState()

    return(
        <Context.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home/>}/> 
                        <Route path='/checkout/' element={<Checkout/>}/>
                        <Route path='/information' element={<ShippingInformation/>}/>
                        <Route path ='/summary' element ={<OrderSummary/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Context.Provider>
    )
}

export default App