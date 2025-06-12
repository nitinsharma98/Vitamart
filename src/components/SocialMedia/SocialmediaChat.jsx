import Chatbox from "./Chatbox";
import Chatinput from "./Chatinputbox";

const SocialmediaChat =({chatmsg , setchatmsg , currentloggedinuser , users}) =>{

    return(
        <>
       <div>
        <h1>Chats</h1> <br /><hr /><br /><br />
            <div>
                <div className="chatbox">
                {chatmsg.map(msg=> <Chatbox msg={msg}  currentloggedinuser={currentloggedinuser} key={Math.random()}/>)}
            </div>
                <Chatinput chatmsg={chatmsg} setchatmsg={setchatmsg} users={users} currentloggedinuser={currentloggedinuser}  />
            </div>
       </div>
        </>
    )
}

export default SocialmediaChat;