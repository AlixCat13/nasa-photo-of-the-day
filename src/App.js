import React from "react";
import NasaCard from './NasaCard'
import NasaLogo1 from './Photos/NasaPhoto1.png'
import "./App.css";


function App() {
return (
  <div className='App'>
    <div className='logo-container'>
      <img className='Nasa' src={NasaLogo1} alt="NASA Logo" />
    <NasaCard />
  </div>
  </div> 
)
 
}

export default App;