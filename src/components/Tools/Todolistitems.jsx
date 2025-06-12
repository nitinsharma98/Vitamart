import { MdDeleteOutline } from "react-icons/md";

const Todolistitems = ({data , handledeltd}) => {

    return(
        <>
            <div className="tdlist">
                <p className="tdtd">{data.todo}</p>
                <p>{data.time}</p>
                <p>{data.date}</p>
                <button onClick={() => {handledeltd(data.id)}}><MdDeleteOutline /></button>
            </div>
           
        </>
    )

}
export default Todolistitems;