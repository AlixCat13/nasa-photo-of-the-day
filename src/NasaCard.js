import React, {useEffect} from 'react'
import axios from 'axios'
import {NasaPhoto} from './NasaPhoto';



export default function NasaCard() {
 // const [photo, setPhoto] = useState([])

 useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?date=2020-07-28&api_key=OetXKIRjqEMceTmEcD6vcXiZgHNeT9PEYIODKpTa')
    .then( response => {
        console.log('success!', response)
    })
    .catch(error => console.log('Oh No!', error))
    }, [])

  return (
    <div className="App">
      <div className='photo-container'>
         <h1 className='heading'>NASA Astronomy Photo of the Day</h1>
            <h2 className='photo-title'>Photo Title</h2>
               
      </div>
    </div>
  );
}