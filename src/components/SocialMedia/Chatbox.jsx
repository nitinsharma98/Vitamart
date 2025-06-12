const Chatbox = ({msg ,  currentloggedinuser}) => {

    return (
        <>
        <div className ={ msg.username !== currentloggedinuser ? "singlechatu" : "singlechato" }>
            <div className="chatimg">
                <img src={msg.profileimg} alt="" />  
            </div>
            <div className={ msg.username !== currentloggedinuser ? "uhu" : "uho" }>
                <p className="ush" style={{fontWeight:"bold"}}>{msg.username}</p>
                <p>{msg.message} </p>
            </div>
            
        </div>
        </>
    )

}

export default Chatbox;