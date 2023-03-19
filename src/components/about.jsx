import Banner from "./banner";
import { useState,useEffect } from "react";
import '../styles/about.css';
import axios from "axios";
const About = () => {
    let title = "About Page";
    let[count,setCount]=useState([])
    let[users,setUsers]=useState([])
    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get("http://localhost:4000/posts")
            let data = await res.data
            setCount(data)
                   }
        fetchData()
    }, [])
    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get("http://localhost:4000/Users")
            let data = await res.data
            setUsers(data)
                   }
        fetchData()
    }, [])

    return ( 
        <div className="About">
            <Banner data={title} />
            <div className="stories d-flex">
                <div className="img">
                    <img src="../images/fruits.jpg" height="700" width="600" alt="" />
                </div>
                <div className="data">
                    <div className="data1">
                    <h2>About Stories</h2>
                    <p> <i>For far away behind the word mountains, far from countries <br /> vokalia and consonantia.</i> </p>
                    </div>
                   <div className="block d-flex flex-wrap">
                   <div className="block1"><h2>10</h2> <p>Years of Experienced</p></div>
                    <div className="block2"><h2>{count.length}</h2> <p>Foods</p></div>
                    <div className="block3"><h2>300</h2> <p>Lifestyle</p></div>
                    <div className="block4"><h2>{users.length}</h2> <p>Happy Customers</p></div>
                   </div>
                </div>
            </div>
            <div className="person">
                <div className="watch">
                    <h1>Roger <br /> Bosch</h1>
                    <p><i>A Small river named Duben <br /> flows by thei place and <br />
                    supplies it with the necessary <br /> regalialia. Far for away. behind <br />
                    the ward mountains far from be <br /> the countries vokalia and <br />
                    consonantia, there live the <br /> blind texts.</i> </p>
                    <h3><i><u>Roger.Bosch</u></i></h3>
                </div>
                <div className="img1">
                    <img src="../images/person.jpg" width="1100" height="500" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default About;