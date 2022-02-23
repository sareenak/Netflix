import React from "react";
import NavBar from "./Components/Header/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import {actions,originals} from './urls'
import RawPost from "./Components/RawPost/RawPost";

function App() {
  return(<div>
    <NavBar/>
    <Banner/>
    <RawPost url={originals} title="Netflix Originals"/>
    <RawPost url={actions} title="Action" isSmall/>
  </div>)
 
}
export default App;
