import Footersp from "./Footersp";
import Shopingitems from "./Shopingitems"

const Mens= ({spdata , setspcart , spcart}) => {

    const newlist = spdata.filter(itm => itm.type == 'mens');

    return (
        <>
        <h2>Mens Wear</h2> <br /><hr /><br /><br />
        <div className="flx">
            {newlist.map(data=> <Shopingitems data={data} key={Math.random()} setspcart={setspcart} spcart={spcart}/>)}
        </div>
        <br /><br /><hr />
        <Footersp/>
        </>
    )
}

export default Mens;