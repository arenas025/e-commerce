import Layout from './src/components/Layout'
import Home from './src/components/Home'
import Context from './src/context/Context'
import {} from 'react'
import './App.scss'
import useInitialState from './src/hooks/useInitialState'

const App = () => {

    const initialState = useInitialState()

    return(
        <Context.Provider value={initialState}>
            <Layout>
                <Home/>
            </Layout>
        </Context.Provider>
    )
}

export default App