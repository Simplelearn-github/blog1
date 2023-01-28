import React from "react";
import Top from "./Components/Top";
import './App.css'
import Header from "./Components/Header";
import Video from "./Components/Video";

import Cards from "./Components/Cards";

function App() {
  
  return (
    <div className="App">

      <div className="top"><Top/></div>
      <div  className="border border-white"><Header/></div>
     <div className="videos"><Video/></div>
     <div><Cards/></div>
    
    </div>
  );
}

export default App;
