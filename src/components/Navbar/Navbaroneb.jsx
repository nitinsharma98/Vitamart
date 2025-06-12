import { FaCalculator } from "react-icons/fa";
import { RiTodoFill } from "react-icons/ri";
import { BsFillClockFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Navbaroneb = ({setnavop}) => {

    return (
        <>
        <ul>
            <NavLink to='/tools/calculator'><li onClick={() => {setnavop('calculator')}}><FaCalculator className="navicon"/> Calculator </li> </NavLink>
            <NavLink to='/tools/todo'><li onClick={() => {setnavop('todo')}}><RiTodoFill className="navicon"/> Todo App  </li> </NavLink>
            <NavLink to='/tools/clock'><li onClick={() => {setnavop('clock')}}><BsFillClockFill className="navicon"/> Bharat Clock  </li> </NavLink>
        </ul>
        </>
    )
}

export default Navbaroneb;