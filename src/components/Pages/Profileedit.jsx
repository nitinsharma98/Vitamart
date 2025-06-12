// import style from "./Profile.module.css";
// import { NavLink } from "react-router-dom";


// const Profileedit = ({users , setusers}) => {

//     const currentloggedinuser = "nitin";

//     const user = users?.find(user => user?.username === currentloggedinuser);

//     const srcs =user?.profileimg;

//     return (
//         <>
//         <div className={style.profbox}> 
//         <div className={style.prof}>
//                 <h2>Edit Your Profile</h2><br /><hr /><br /><br />
//                         <img src={srcs || defaultImage}
//                             onError={(e) => {
//                                             e.target.onerror = null;
//                                             e.target.src = defaultImage;
//                                             }}
//                             alt="Post content" className="post-image" />
//                             <br /><br />
//                             New Profile pucture link : <input type="text" defaultValue={srcs}/> <br /><br /><br />
//                 Name :  <input type="text" defaultValue={user.username}/> <br /><br />
//                 <div>
//                     Age : <input type="number" defaultValue={user.age}/> <br /><br />
//                     City : <input type="text" defaultValue={user.city}/> <br /><br />
//                     Male <input type="radio" name="gender" value="Male" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     Female <input type="radio" name="gender" value="Female" />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     Others <input type="radio" name="gender" value="LGBTQ" /> 
//                 </div><br />
//                 <br /><textarea rows={3} cols={60} defaultValue={user.about}/> <br /><br /> 
                
//                  <br /> <br /><hr /><br /><br />
//                 <NavLink to="/"><button style={{width:"100px"}} onClick={() => {console.log("profile data send to server")}}> Done </button>     </NavLink>        
//             </div>
//         </div>
//         </>
//     )
// }

// export default Profileedit;













//---------------------------------------------------------------------------




import { useState } from "react";
import style from "./Profile.module.css";
import { NavLink } from "react-router-dom";
import defaultImage from "../../images/th.jpg"; // Make sure this import is correct

const Profileedit = ({ users, setusers , currentloggedinuser }) => {

    const user = users?.find(user => user?.username === currentloggedinuser);

    const [profileimg, setProfileimg] = useState(user?.profileimg || "");
    const [username, setUsername] = useState(user?.username || "");  // not used as  username will never change
    const [age, setAge] = useState(user?.age || "");
    const [city, setCity] = useState(user?.city || "");
    const [gender, setGender] = useState(user?.gender || "");
    const [about, setAbout] = useState(user?.about || "");

    const handleSubmit = () => {
        const updatedUsers = users.map(u =>
            u.username === currentloggedinuser
                ? { ...u, profileimg, username, age, city, gender, about }
                : u
        );
        setusers(updatedUsers);
    };

    return (
        <>
            <div className={style.profbox}>
                <div className={style.prof}>
                    <h2>Edit Your Profile</h2><br /><hr /><br /><br />
                    <img
                        src={profileimg || defaultImage}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultImage;
                        }}
                        alt="Post content"
                        className="post-image"
                    />
                    <br /><br />
                    New Profile picture link:
                    <input
                        type="text"
                        value={profileimg}
                        onChange={(e) => setProfileimg(e.target.value)}
                    /> <br /><br /><br />
                    Name:
                    <h1>{user.username}</h1>
                    <br /><br />
                    <div>
                        Age:
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        /> <br /><br />
                        City:
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        /> <br /><br />
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Others
                        <input
                            type="radio"
                            name="gender"
                            value="LGBTQ"
                            checked={gender === "LGBTQ"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div><br />
                    <textarea
                        rows={3}
                        cols={60}
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    /> <br /><br />
                    <br /><br /><hr /><br /><br />
                    <NavLink to="/">
                        <button style={{ width: "100px" }} onClick={handleSubmit}>Done</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Profileedit;



// currently not edit username cuz then it will not found currently as not backfunc. set