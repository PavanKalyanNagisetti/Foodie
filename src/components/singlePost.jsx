import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Banner from "./banner";
import axios from "axios";
import { Link } from "react-router-dom";

const SinglePost = () => {
    let [x, setPost] = useState([])
    let params = useParams()
    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get(`http://localhost:4000/posts/${params.id}`)
            const data = await res.data
            setPost(data)
        }
        fetchData()
    })
    let title = "Posts"
    return (
        <div className="sp">
            <Banner data={title} />

            <div className="readPost">
               
            
                    <div className="aboutPost d-flex ">
                        <div className="img">
                            <img src={x.image} height="700" width="600" alt="" />
                        </div>
                        <div className="summary mx-5">
                            <h3 class="text-center">{x.title}</h3>
                            <h5>By <i>{x.author}</i></h5>
                            <p>{x.summary}</p>
                            <h5><u>Restaurant Location</u></h5>
                            <iframe class="mx-5" src={x.location} frameborder="" width="600px" height="450px"></iframe>
                            <div className="back mt-4">
                            <Link to={`/home/food`}><button class="btn btn-dark mb-3 rounded-1 homeBtn">Back Post 🡲</button></Link>
                            </div>
                        </div>
                    </div>
                    


            </div>
            
        </div>
    );
}

export default SinglePost;