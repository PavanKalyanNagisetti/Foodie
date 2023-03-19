
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from "react";
import '../styles/foodieHome.css'
import '../styles/about.css';
import axios from "axios";
const Home = () => {

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
            let res = await axios.get("http://localhost:4000/users")
            let data = await res.data
            setUsers(data)
                   }
        fetchData()
    }, [])

    return (

        <div className="home ">
            <div className="banner">
                <div className="banner_image">
                    <img height="700" width="900" src="./images/div1.jpg" alt="" />
                </div>
                <div className="discription">
                    <p>Feautured Posts</p>
                    <h1>Love The  <br /> Delicious & <br /> <u>Tasty Foods</u></h1>
                    <p>A Small river named duden flows <br /> by their place and supplies it with <br /> the necessary regelialia</p>
                    <button>Add a Post 🡲</button>
                </div>
            </div>

            <div className="stories">
                <h2>Recent Stories</h2>
                <div className="div2">
                    <div className="cards">
                        <div className="card1">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/desert1.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Foods</Card.Title>

                                    <Button variant="light">Read More 🡲</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="card2">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/desert2.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Foods from scotland</Card.Title>

                                    <Button variant="light">Read More 🡲</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="card3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/desert3.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Foods</Card.Title>

                                    <Button variant="light">Read More 🡲</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="card4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/desert4.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Foods</Card.Title>

                                    <Button variant="light">Read More 🡲</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="bigpic">
                        <img src="./images/biscuts.jpg" width="550px" height="730px" alt="" />
                        <h1>Tasty & Delicious Foods</h1>
                        <button>Read More 🡲</button>
                    </div>
                </div>
            </div>

            <div className="feauturedPosts ">
                <h2>Featured Posts</h2>
                <div className="div3">
                    <div className="Cards">
                        <div className="Card1">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/Card1.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Foods</Card.Title>

                                    <Button variant="light">Read More 🡲</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="Card2">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/Card2.jpg" height="370" />
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Foods from scotland</Card.Title>

                                    <Button variant="light">Read More 🡲</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="Card3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="./images/Card3.jpg" height="380"/>
                                <Card.Body>
                                    <Card.Text>
                                        Dessert ━━━━ March 01, 2018
                                    </Card.Text>
                                    <Card.Title>Tasty & Delicious Foods</Card.Title>

                                    <Button variant="light">Read More 🡲</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div class="Card4 sidebar-box p-4 about text-center ftco-animate fadeInUp ftco-animated">
                            <h2 class="heading mb-4">About Me</h2>
                            <img src="images/Card4.jpg" height="200" width="200" class="img-fluid" alt="Colorlib Template"/>
                                <div class="text pt-4">
                                    <p>Hi! My name is <strong>Cathy Deon</strong>,<br /> behind the word mountains,<br /> far from the countries Vokalia <br /> and Consonantia, there live <br /> the blind texts. Separated <br /> they live in Bookmarksgrove <br /> right at the coast of the <br /> Semantics, a large language <br /> ocean.</p>
                                </div>
                                <input type="text" class="form-control w-100" placeholder="Search"></input>
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

        </div>
    );
}

export default Home;