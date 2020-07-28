import React, {useEffect} from "react";
import axios from 'axios'
import "./App.css";

function App() {

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod')
    .then( response => {
        console.log(response)
    })
    .catch(error => console.log(error))
    }, [])

  return (
    <div className="App">
      {/* <NasaGrid /> */}
    </div>
  );
}

export default App;