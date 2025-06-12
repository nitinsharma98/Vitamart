import { useRef} from "react";

const SocialmediaNewpost =({smpdata , setsmpdata , users , currentloggedinuser , setnotification , notifications}) =>{

    const user = users?.find(user => user?.username === currentloggedinuser);

    const Aboutel = useRef();
    const Imageel = useRef();
    const Tagsel = useRef();

    // const [linkedimg , setlinkedimg] = useState(null);
    // const showimg = () => {
    //     setlinkedimg(Imageel.current.value);
    // }

    const handleaddcontent = (event) => {
        event.preventDefault();
        const aboutValue = Aboutel.current.value;
        const imageValue = Imageel.current.value;
        const tagsValue = Tagsel.current.value.split(/(\s+)/);

        const a=  {
            name: user.username, 
            id: Math.random() ,
            date : (Date()).slice(3,15) , 
            about:aboutValue,
            image: imageValue,
            likes: 348,
            tags: tagsValue
        };
        setsmpdata([...smpdata, a]);

        Aboutel.current.value = "";
        Imageel.current.value = "" ;
        Tagsel.current.value = "";

        setnotification([...notifications ,user.username]);
    }


    return(
        <>
        <h1>Create New Content</h1> <br /><br />
        <div> 
            <form className="npform" onSubmit={handleaddcontent}>
                <label htmlFor="About">About </label><br /><br />
                <textarea id="About" placeholder="Write about your content" rows={5} ref={Aboutel} required></textarea><br /><br />               

                <br /><hr /><br />

                <div>
                    <div>
                        <label htmlFor="Image">Image URL: </label><br /><br />
                        <input type="text" placeholder="Fill the link of image" id="Image" ref={Imageel}  required />    {/* onChange={showimg} */}
                        
                    </div>
                    {/* <div>
                        <p>Filled link's image will shown here : </p>
                    <   img src={linkedimg} alt="No image Found" className="showwasteimage"/>
                    </div> */}
                </div>
                <br /><br />

                <br /><hr /><br />

                <label htmlFor="Tags">Tags </label><br /><br />
                <input type="text" placeholder="Use space to differentiate tags" id="Tags" ref={Tagsel} required /> <br /><br /> <br /><br />

               <div>
                    <button type="Submit" > Add</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>
        
        </>
    )
}

export default SocialmediaNewpost;


// 4 things comment here due to empty reload and also do it in socialmedia.css -------- my code newpost 234  // solved in profile edit by gpt to read and understand

