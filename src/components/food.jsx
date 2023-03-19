import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "./banner";
import { Link } from "react-router-dom";
const Food = () => {
    let title = "All Posts"
    let [posts, setPosts] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get("http://localhost:4000/posts")
            let data = await res.data
            setPosts(data)
            console.log(data);
        }
        fetchData()
    }, [])

    return (
        <div className="Food">
            <Banner data={title} />
            <div className="post_list d-flex flex-wrap mt-3 mx-5">
                {posts.map(x => {
                    return (
                        <div className="x mt3 mx-3" key={x._id}>
                            <Link to={`/food/${x._id}`}><img src={x.image} className="rounded-2 homePostImage" width="300" height="350" alt="" /></Link>
                            <div className="info mt-3">
                                <h3 style={{ fontFamily: "inherit" }}>{x.title}</h3>
                                <p className="text-secondary">- Written by {x.author}</p>
                                <Link to={`/home/food/${x._id}`} className="btn btn-dark mb-3 rounded-1 homeBtn">Read more 🡲</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Food;