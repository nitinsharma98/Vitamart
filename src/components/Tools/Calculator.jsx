import { useState } from "react";
import "./Tools.css"


const Calculator= () => {

    const btns=["c", "=" , "." , "1" ,"2" , "3" , "4" ,"5" , "6" , "7" ,"8" ,"9" ,"/" , "0" , "*" , "+" , "-" , "X"];

     const [inputdisplay , setinputdisplay ] = useState("");

     const calbtnclick = (btn) => {
        if(btn === 'c'){
            setinputdisplay("");
        }else if(btn == 'X'){
            let n = inputdisplay.length;
            const res = inputdisplay.slice(0,n-1);
            setinputdisplay(res)
        }else if(btn == '='){
            const res =  eval(inputdisplay);
            setinputdisplay(res);
        }else{
            const res = inputdisplay + btn;
            setinputdisplay(res);
        }
     }

    return (
        <>
         <h2>Calculator </h2> <br /> <hr /><br /><br />

        <div className="cntr">
            <div className="calculator">
                <input type="text" className="display" value={inputdisplay} readOnly />
                <div className="buttonContainer">
                    {btns.map(btn => <button key={btn}  className="calbtn" onClick={()=> calbtnclick(btn)} >{btn}</button> )}                  
                </div>     
            </div>               
        </div>
        </>
    )
}

export default Calculator;