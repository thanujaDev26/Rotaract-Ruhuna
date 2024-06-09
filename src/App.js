import './App.css';
import Navbar from "./Components/Navigation/Navbar";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/RACRUH/RACRUH";
import Avenues from "./Components/Avenues/Avenues";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contactus";
import Footer from "./Components/Navigation/Footer";
import DirectorBoard from "./Components/Explore/DirectorBoard";
import Dashboard from "./Components/Explore/ExploreHome";
import ExecutiveBoard from "./Components/Explore/ExecutiveBoard";
import Error from "./Components/Navigation/Error";
import {useState} from "react";
import Demo from "./Components/Demo";
import axios from "axios";

function App() {

    let navigate = useNavigate();
    let [user, setUser] = useState({
        name : '', email : '',phone : '', message : ''
    });

    // let getUserObj = (user) =>{
    //     setUser(user);
    //     console.log(user);
    // }
    let getUserBE = (user) => {
        axios.post('http://localhost:3000/contact-us', user)
            .then((response) => {
                //console.log(response);
                //navigate('/contact-us/navigate')
            })
            .catch((error)=>{
                //console.log(error);
            })
    }
  return (
      <>
      {/*<div>*/}
      {/*    <CoverImage/>*/}
      {/*</div>*/}
      <div className="navbar">
          <Navbar/>
      </div>
      <div>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/home"  element={<Home/>}/>
              <Route path="/about-us" element={<About/>}/>
              <Route path="/avenues"  element={<Avenues/>}/>
              <Route path="/blog"  element={<Blogs/>}/>
              <Route path="/contact-us"  element={<Contact user={getUserBE}/>}/>
              <Route path="/explore" element={<Dashboard/>}/>
              <Route path='/explore/director-board' element={<DirectorBoard/>}/>
              <Route path='/explore/executive-board' element={<ExecutiveBoard/>}/>
              <Route path='/contact-us/navigate' element={<Demo/>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
      </div>
          <div>
              <Footer/>
          </div>
      </>
  );
}

export default App;
