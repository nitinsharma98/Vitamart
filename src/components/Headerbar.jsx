import style from "./Headerbar.module.css";
import logo from "../images/logo.png";
import day from "../images/day.png";
import night from "../images/night.png";
import searchb from "../images/search-b.png";
import searchw from "../images/search-w.png";
import {NavLink  , useNavigate} from "react-router-dom"

const Headerbar = ({theme , setTheme, setoption}) => {

    const navigate = useNavigate();

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return ( 
        <>
        {/* <div className={`navbar ${theme}`} >       */}
        <div className={theme ==  'light' ? style.navbar : `${style.dark}`  } >      

            <div className={style.flx}>
                <div onClick={() => { navigate('/' , {replace:true})}}><img src={logo} alt="" className={style.logo}/> &nbsp;&nbsp;&nbsp;</div>
                <div className={style.searchbox}>
                    <input type="text" placeholder="Search"/> &nbsp;&nbsp;
                    <img src={theme == 'dark' ? searchw : searchb} alt="" className={style.searchicon} />
                </div>    
            </div>            

            <ul className={style.flx}>
                <li onClick={()=> { setoption('profile')}}> <NavLink to='/' >Profile</NavLink> </li>
                <li onClick={()=> { setoption('socialmedia')}}><NavLink to='/social' >Social Media </NavLink></li>
                <li onClick={()=> { setoption('tools')}}><NavLink to='/tools' >Tools</NavLink></li>
                <li onClick={()=> { setoption('shoping')}}><NavLink to='/shop' > Shoping</NavLink></li>
            </ul>

            <img src={theme == 'dark' ? day : night} alt="" className={style.toggleIcon} onClick={()=> {toggle_mode()}} />

        </div>
        </>
    )
}

export default Headerbar;