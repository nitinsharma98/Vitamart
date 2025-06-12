import { MdEmojiFoodBeverage } from "react-icons/md";
import './Tools.css';
import Todolistitems from "./Todolistitems"
import { useState } from 'react';

const Todo= ({tddata , settddata }) => {

    const [todo , settodo] = useState("");
    const [time , settime] = useState("00:00");
    const [date , setdate] = useState(() => new Date().toISOString().slice(0, 10));

    const handletodochange = (event) => settodo(event.target.value);
    const handletimechange = (event) => settime(event.target.value);
    const handledatechange = (event) => setdate(event.target.value);

    const handleNewtd = () => {
    //    if (!todo.trim()) return alert("Todo cannot be empty!");        ---- if not use req in todo input use it given by gpt
        const newitm = [ {todo : todo , time : time , date : date , id: Math.random() } , ...tddata ];
        settddata(newitm);
        settodo("");
        setdate(new Date().toISOString().slice(0, 10));
        settime("00:00");
      }

    const handledeltd = (tditmdl) => {
        const newitm = tddata.filter(data => data.id !== tditmdl) ;
        settddata(newitm);
    }

    return (
        <>
        <h2> Todo List</h2><br /> <hr /><br /><br />
        <div className="td">
            <div className='tda'>
                <input type="time" className='tdab' onChange={handletimechange} value={time} required />
                <input type="date" className='tdab' onChange={handledatechange} value={date} required /> <br />
                <input type="text" className='tdaa' onChange={handletodochange} value={todo} placeholder='Enter Todo Task'  maxLength={25} required/> 
                <button className='tdadd' onClick={handleNewtd}>Add</button>
            </div> <br /><hr /><br />
            <div className='tda'>
                {tddata.length == 0 ? 
                    <div  className="emptytd">
                    <h2>Nothing to do ...</h2>
                    <br />
                    <MdEmojiFoodBeverage /> 
                     </div> : (tddata.map(data => <Todolistitems key={data.id} data={data} handledeltd={handledeltd}/>)) }
            </div>
        </div>
        <br /><br />
        <center>Note: Todo input field have limit of maximum 25 characters!</center>
        </>
    )
}

export default Todo;