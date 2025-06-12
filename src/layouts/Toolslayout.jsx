import style from "../components/Site.module.css"
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Toolslayout = ({theme , option , setnavop , navop }) => {

    return (
            <div>
                <Navbar theme={theme} navop={navop} setnavop={setnavop} option={option}/>
                <div  className={theme ==  'light' ? style.navbar : `${style.dark}` }>
                <Outlet />
                </div>
            </div>
    )
}

export default Toolslayout;



