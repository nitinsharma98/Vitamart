import Footersp from "./Footersp";
import Shopingitems from "./Shopingitems"

const Food= ({spdata , setspcart , spcart}) => {

    
        const newlist = spdata.filter(itm => itm.type == 'food');
    

    return (
        <>
        <h2>Food Items</h2> <br /><hr /><br /><br />
        <div className="flx">
            {newlist.map(data=> <Shopingitems data={data} key={Math.random()} setspcart={setspcart} spcart={spcart}/>)}
        </div>
        <br /><br /><hr />
        <Footersp/>
        </>
    )
}

export default Food;