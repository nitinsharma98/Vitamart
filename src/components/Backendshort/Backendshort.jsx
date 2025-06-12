import { useRef } from "react";

const Backendshort = ({setcurrentloggedinuser}) => {

    const user = useRef();
    const setuser = () => {
        setcurrentloggedinuser(user.current?.value);
    }

    return (
        <> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <center>
                user : <input type="text" ref={user}/><br />
                <button onClick={setuser}>Set</button>
            </center>
        </>
    )
}

export default Backendshort;