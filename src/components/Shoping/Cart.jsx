import Footersp from "./Footersp";
import Shopingitems from "./Shopingitems"

const Cart= ({setspcart , spcart}) => {

    return (
        <>
        <h2>Cart</h2> <br /><hr /><br /><br />

        {spcart.length == 0 ? <h2>You have nothing in cart.</h2> : 
            <div className="flx">
            {spcart.map(data=> <Shopingitems data={data} key={Math.random()} setspcart={setspcart} spcart={spcart}/>)}
            </div>
    
        }

        <br /><br /><hr />
        <Footersp/>
        </>
    )
}

export default Cart;