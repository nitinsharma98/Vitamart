import Postsm from "./Postssm";

const SocialmediaHome=({smpdata }) =>{

    return(
        <> 
        <div>
             {smpdata.map(data => <Postsm data={data} key={Math.random()}/>)}
        </div>
        </>
    )
}

export default SocialmediaHome;