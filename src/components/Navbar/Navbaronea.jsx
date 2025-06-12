import { IoHomeOutline } from "react-icons/io5";
import { BsChatSquareDots } from "react-icons/bs";
import { LuTableOfContents } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { NavLink } from "react-router-dom";

import "./Nav.css"


const Navbaronea = ({setnavop}) => {

    
    return(
        <>
        {/* <div className={theme ==  'light' ? style.navbar : `${style.dark}`  } > */}

        <ul>
            <NavLink to='/social/home' ><li onClick={() => {setnavop('home')}}><IoHomeOutline className="navicon"/> Home</li> </NavLink>
            <NavLink to='/social/chat' ><li onClick={() => {setnavop('chats')}}><BsChatSquareDots className="navicon"/> Chats</li> </NavLink>
            <NavLink to='/social/notification' ><li onClick={() => {setnavop('notifications')}}><IoMdNotificationsOutline className="navicon"/> Notifications</li> </NavLink>
            <NavLink to='/social/create' ><li onClick={() => {setnavop('post')}}><GoPlus className="navicon"/> Create Post</li> </NavLink>
        </ul>

        {/* </div> */}
        </>
    )
}

export default Navbaronea;