import style from "../components/Site.module.css"
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Socialmedialayout = ({theme , option , setnavop , navop}) => {

    return (
            <div>
                <Navbar theme={theme} navop={navop} setnavop={setnavop}/>
                <div  className={theme ==  'light' ? style.navbar : `${style.dark}` }>
                <Outlet/>
                </div>
            </div>
    )
}

export default Socialmedialayout;