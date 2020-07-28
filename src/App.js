import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";

function App() {

  const [photo, setPhoto] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then( response => {
        console.log(response)
    })
    .catch(error => console.log(error))
    }, [])

  return (
    <div className="App">
      <div className='photo-container'>
         <h1 className='heading'>NASA Astronomy Photo of the Day</h1>
            <h2 className='photo-title'>Photo Title</h2>
               <img className='photo' src=''>Nasa Photo</img>

      </div>
    </div>
  );
}

export default App;