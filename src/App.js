import './App.css';
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/RACRUH";
import Avenues from "./Components/Avenues";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contactus";

function App() {
  return (
      <>
      <div className="navbar">
          <Navbar/>
      </div>
      <div>
          <Routes>
              <Route path="/"  element={<Home/>}/>
              <Route path="/about-us" element={<About/>}/>
              <Route path="/avenues"  element={<Avenues/>}/>
              <Route path="/blogs"  element={<Blogs/>}/>
              <Route path="/contact-us"  element={<Contact/>}/>
              <Route path="/explore" element={<h1>Explore</h1>}/>
          </Routes>
      </div>
      </>
  );
}

export default App;
