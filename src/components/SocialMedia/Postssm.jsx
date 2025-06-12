import './Socialmedia.css'

const Postsm = ({data}) => {

    return (
        <>
        <div className="postshow">
            <p className="username">{data.name}</p>
            <p className="date">{data.date}</p> <br /><hr />
            <p >{data.about}</p><br />
            <p className='badges'>
                {data.tags.map (badge => badge !== " " && <span className='badge' key={Math.random()}>#{badge}</span>)}                                                                         
                                                                                                                                             {/* need to set badges  */}
            </p> <br />
            <img src={data.image} alt="Image not avilable"/>
            <p className="liked">Liked by {data.likes} users</p> <br /><hr/>
            <div className="postbtns">
                <button >Like</button>
                <button >Comment</button>
                <button >Share</button>
            </div>
        </div><br />
        </>
    )
}

export default Postsm;