import style from './Navbar.module.css';
import Navbaronea from './Navbar/Navbaronea'
import Navbaroneb from './Navbar/Navbaroneb';
import Navbaronec from './Navbar/Navbaronec';
import Navbartwo from './Navbar/Navbartwo';

const Navbar = ({theme , option , setnavop}) => {
    
    return(
        <>
        <div className={theme ==  'light' ? style.navbarn : `${style.darkn}`  } >

            <div>
                {option == 'tools' ?( <Navbaroneb setnavop={setnavop}/> ): option == 'shoping' ? <Navbaronec setnavop={setnavop}/> : <Navbaronea setnavop={setnavop}/> }
            </div>
       
       <div className={style.navbartwo}>
            <Navbartwo/>
       </div>

        </div>
        </>
    )
}

export default Navbar;