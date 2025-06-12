import style from "./Profile.module.css";
import Footer from "../Footer";
import defaultImage from "../../images/th.jpg";
import { NavLink } from "react-router-dom";

const Profile = ({users , currentloggedinuser}) => {

    const user = users?.find(user => user?.username === currentloggedinuser);

    if (!user) {
        return (
            <div className={style.profbox}>
                <div className={style.prof}>
                    <h2>User Not Found</h2>
                    <p>No profile exists for: <strong>{currentloggedinuser}</strong></p>
                    {/* <NavLink to="/editprofile">
                        <button style={{ width: "100px" }}>Create Profile</button>
                    </NavLink> */} // as by default get nitin and no new adding feature added 
                </div>
                <br /><br /><hr /><br /><br />
                <Footer />
            </div>
        );
    };   // just to safe page from crash not logical help 

    return (
        <>
        <div className={style.profbox}> 
            <div className={style.prof}>
                        <img src={ user.profileimg || defaultImage}
                            onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = defaultImage;
                                            }}
                            alt="Post content" className="post-image" /> <br /><br /><br />
                <h1>{user.username}</h1> <br /><br />
                <p style={{fontWeight:"bold"}}>{user.about} </p> <br /><br />
                <div>
                    {user.gender} <br /><br />
                    {user.age} <br /><br />
                    {user.city} <br /><br />
                </div>   <br /><hr /><br />
                <NavLink to="/editprofile"><button style={{width:"100px"}}> Edit Profile</button>     </NavLink>        
            </div>

            <center>
            <NavLink to="/asdf"><button>Switch Profile</button></NavLink>
        </center>
            <br /><br /><br /><br /><hr/><br /><br />
            <Footer/>
        </div>
        </>
    )
};

export default Profile;



