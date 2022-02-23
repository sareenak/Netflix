import React from "react";
import NavBar from "./Components/Header/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RawPost from "./Components/RawPost/RawPost";

function App() {
  return(<div>
    <NavBar/>
    <Banner/>
    <RawPost title="Netflix Originals"/>
    <RawPost title="Action" isSmall/>
  </div>)
 
}
export default App;
