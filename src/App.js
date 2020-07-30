import React from "react";
import NasaCard from './NasaCard'
// import NasaPhoto from './NasaPhoto'
import "./App.css";


function App() {
return (
  <div className='App'>
    <div className='logo-container'>
      <img className='Nasa' src={\Photos\NasaLogo2.jpg} alt="NASA Logo" />
    <NasaCard />
    {/* <NasaPhoto /> */}
  </div>
  </div> 
)
 
}

export default App;