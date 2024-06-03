import './App.css';
import Navbar from "./Components/Navigation/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/RACRUH/RACRUH";
import Avenues from "./Components/Avenues/Avenues";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contactus";
import CoverImage from "./Components/Navigation/CoverImage";
import Partners from "./Components/RACRUH/Partners";
import Footer from "./Components/Navigation/Footer";
import DirectorBoard from "./Components/Explore/DirectorBoard";
import Dashboard from "./Components/Explore/ExploreHome";
import ExecutiveBoard from "./Components/Explore/ExecutiveBoard";

function App() {
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
              <Route path="/contact-us"  element={<Contact/>}/>
              <Route path="/explore" element={<Dashboard/>}/>
              <Route path='/explore/director-board' element={<DirectorBoard/>}/>
              <Route path='/explore/executive-board' element={<ExecutiveBoard/>}/>
          </Routes>
      </div>
          <div>
              <Footer/>
          </div>
      </>
  );
}

export default App;
