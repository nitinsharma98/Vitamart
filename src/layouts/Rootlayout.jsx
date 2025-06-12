import { Outlet } from "react-router-dom";
import Headerbar from "../components/Headerbar";

const Rootlayout = ({theme , setTheme , setoption , navop , setnavop , option}) => {

    return (
        <div>
             <Headerbar theme={theme} setTheme={setTheme} setoption={setoption} />
             <Outlet/>
        </div>
    )
}

export default Rootlayout;