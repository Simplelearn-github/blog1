import React from "react";
import Top from "./Components/Top";
import './App.css'
import Header from "./Components/Header";
import Video from "./Components/Video";
import Styled from "styled-components";

function App() {
  const div = Styled.h1`
  Text-align:right;

      @media (max-width: 767px) {
          text-align: center;
      }
      @media (max-width: 400px) {
          text-align: left;
      }
`;
  return (
    <div className="App">

      <div className="top"><Top/></div>
      <div  className="border border-white"><Header/></div>
     <div className="videos"><Video/></div>
    
    </div>
  );
}

export default App;
