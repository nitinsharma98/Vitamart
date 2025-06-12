import { useRef } from "react";

const Chatinput = ({chatmsg , setchatmsg , users , currentloggedinuser}) => {

    // console.log(users , currentloggedinuser , user)
    const user = users?.find(user => user?.username === currentloggedinuser);
    const rawmsg = useRef();

    const handlesendmsg = (event) => {
        event.preventDefault();
        setchatmsg([{
            username: user.username,
            message: rawmsg.current.value ,
            profileimg : user.profileimg
        } , ...chatmsg]);
        rawmsg.current.value = "";   
    }

    return (
    <>
        
        <form className="chatinput" onSubmit={handlesendmsg}>
            <br /><hr /><br />
            <button>Send</button>
            <input type="text" ref={rawmsg} placeholder="Write your message (will not be empty)"  required/> 
        </form>
    </>
    )

}

export default Chatinput;