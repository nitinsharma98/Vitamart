import { useEffect, useState } from "react";

const Clock= () => {

    const [date , setdate ] = useState(new Date());

    useEffect(() => {
        const intervalid = setInterval(() => {
            setdate(new Date());
        }, 1000);

        return() => {
            clearInterval(intervalid);
        }
    } , []);

    let time = date;
    return (
        <>

        <h2>Bharat Clock </h2> <br /> <hr /><br /><br />

        <div className="cntr">
                Current Time : {time.toLocaleTimeString()} <br /><br /><hr /><br />
                Current Date : {time.toLocaleDateString()} <br /><br /><hr /><br />
                Today is {time.toDateString().slice(0,3)}  <br /><br /><hr /><br />
        </div>
        

        </>
    )
}

export default Clock;