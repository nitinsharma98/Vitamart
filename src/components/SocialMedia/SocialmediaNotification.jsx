import "./Socialmedia.css"

const SocialmediaNotification =({notifications}) =>{
    return(
        <>
        <div className="">
            <h2>Notifications</h2> <br /><hr /><br /><br />
            {notifications.map(n => (<p className="postshow"> key={Math.random()}{(Date()).slice(3,15)} -- New Post created by #{n} </p> ) )}
        </div>
        </>
    )
}

export default SocialmediaNotification;