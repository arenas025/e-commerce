import { FcShop } from "react-icons/fc";
import { GrFormSearch } from "react-icons/gr";
import { BsCartCheck } from "react-icons/bs"
import './Header.scss'


const Header = () => {
    return (
        <div className="header">
            <FcShop className="header--logo"/>
            <section className="header--searcher">
                <input placeholder="Busca tu producto"/>
                <GrFormSearch/>
            </section>
            <BsCartCheck className="header--cart"/>
        </div>
    )
}

export default Header