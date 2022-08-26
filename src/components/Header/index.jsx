import { FcShop } from "react-icons/fc";
import { GrFormSearch } from "react-icons/gr";
import { BsCartCheck } from "react-icons/bs"
import { useRef } from "react";
import { useContext } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";

import './Header.scss'


const Header = () => {
    const ref = useRef()

    const {handleSearcherValue, state} = useContext(Context)
    
    const updateSeacherValue = () => {
        handleSearcherValue(ref.current.value)
    }

    const cart = [...state.cart]

    return (
        <div className="header">
            <Link to='/'>
                <div className="header--logo">
                    
                </div>
            </Link>
            <section className="header--searcher">
                <input onChange={updateSeacherValue} ref={ref} placeholder="Busca tu producto"/>
                <GrFormSearch/>
            </section>
            <Link to='/checkout'>
                <div className="header--cart">
                    <BsCartCheck className="header--cart__icon"/>
                    {cart.length !== 0 ? 
                    <div className="header--cart__counter">
                        {cart.length}
                    </div> : <></>}
                </div>
            </Link>
        </div>
    )
}

export default Header