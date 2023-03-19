import Banner from "./banner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddPost = () => {
   
    let [author, setAuthor] = useState();
    let [title, setTitle] = useState();
    let [summary, setSummary] = useState();
    let [image, setImage] = useState();
    let [location, setLocation] = useState()

let addPost = (e) =>{
    e.preventDefault()
    let data = {author,title,summary,image,location}
    if(author && title  && summary && image && location){
        axios.post("http://localhost:4000/add-post",data)
        .then(res =>{
            alert(res.data.message)
        }).catch(err =>{
            alert(err.data.message)
        })

    }else{
       alert("Please fill all the fields")
    }
}

let title1 = "Add a Post"

    return (
        <div className="AddPost ">
            <Banner data={title1} />
            <div className="div1 d-flex mt-5">
                <div className="picture">
                    <img src="../images/desert1.jpg" width="550px" height="630px" alt="" />
                </div>
                <div className="form mx-5">
                    <h1><u>ADD Post</u></h1>
                    <form action="" onSubmit={addPost}>
                        <div className="author ">
                            <label htmlFor="Author">Author</label>
                            <input type="name"
                                placeholder="Author"
                                className="form-control w-100  p-2 "
                                name="Author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}

                            />
                        </div>
                        <div className="title">
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                placeholder="Title of the post"
                                className="form-control  p-2 "
                                name="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}

                            />
                        </div>
                        <div className="summary">
                            <label htmlFor="summary">Summary</label>
                            <textarea name="summary" id="" cols="100" rows="10"
                             value={summary}
                             onChange={(e) => setSummary(e.target.value)}
                            >

                            </textarea>

                        </div>
                        <div className="image">
                            <label htmlFor="image">image</label>
                            <input type="link"
                                className="form-control  p-2 "
                                placeholder="image of the post"
                                name="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}

                            />
                        </div>
                        <div className="location">
                            <label htmlFor="">Location</label>
                            <input type="text"
                                className="form-control  p-2"
                                placeholder="location of the post"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}


                            />
                        </div>
                        <div className="signUP_button w-50 ">
                            <button className="btn btn-danger  w-50">Submit Post</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPost;