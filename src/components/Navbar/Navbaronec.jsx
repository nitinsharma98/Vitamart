import { IoIosCart } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { TbHorseToy } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Navbaronec = ({setnavop}) => {

    return (
        <>
        <ul>
            <NavLink to='/shop/cart'><li onClick={() => {setnavop('cart')}}><IoIosCart className="navicon"/> Cart</li> </NavLink>
             <NavLink to='/shop/mens'><li onClick={() => {setnavop('mens')}}><GiClothes className="navicon"/> Mens Wear </li> </NavLink>
             <NavLink to='/shop/food'><li onClick={() => {setnavop('food')}}><MdEmojiFoodBeverage className="navicon"/> Food items </li> </NavLink>
            <NavLink to='/shop/toys'><li onClick={() => {setnavop('toys')}}><TbHorseToy className="navicon"/>   Toys </li> </NavLink>
        </ul>
        </>
    )
}

export default Navbaronec;