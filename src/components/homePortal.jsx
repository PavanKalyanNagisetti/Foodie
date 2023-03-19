
import { Routes,Route } from "react-router-dom";
import About from "./about";
import AddPost from "./addPost";
import Food from "./food";
import Home from "./foodieHome";
import Footer from "./footer";
import Footer1 from "./footer1";
import Navbar from "./navbar"
import SinglePost from "./singlePost";

const HomePortal = () => {
    return (
        <div className="HomePortal">
             <Navbar/>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About />} />
                <Route path='/food' element={<Food/>} />
                <Route path='/add-post' element={<AddPost/>} />
                <Route path='/food/:id' element={<SinglePost/>} />
                </Routes>
             <Footer1/>
             <Footer/>
        </div>
      );
}
 
export default HomePortal;