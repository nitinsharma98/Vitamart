import './Shoping.css'

const Shopingitems = ({data , setspcart , spcart}) => {

    const iscart =spcart.some(item => item.name === data.name);
    const dis =Math.floor((data.newprice)/((data.oldprice)/100));

    const handleaddcart = (data) => {
        const cart = [...spcart , data];
        setspcart(cart);
    }

    const handledelcart = (data) => {
        // const cart = spcart.filter(itm => itm !== data);
        const cart = spcart.filter(itm =>(itm.price +itm.name !== data.price+data.name  ));
        setspcart(cart);
    }    

    return (
        <>
            <div className="spitmbox">
               <img src={data.img} alt='Image Not Found'/>
               <p style={{color:'grey' , fontSize:'smaller'}}>{data.rating}⭐ | Based on {data.total} ratings</p><br />
               <p><b>{data.name }</b> </p> 
                    <div className='price'>
                        <span className='newprice' >₹ {data.newprice}-/</span>
                        <span className='oldprice' >₹ {data.oldprice} </span>
                        <span className='discount' > &#40; {100-dis}% off&#41;</span>
                    </div>
              <br />
              {iscart ?    <button className='spdel' onClick={() => handledelcart(data)}>Remove from Cart</button>
                         :  <button className='spadd' onClick={() => handleaddcart(data)}>Add to Cart</button> }

            </div>
        </>
    )
}

export default Shopingitems;
