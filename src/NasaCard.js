import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NasaPhoto from './NasaPhoto';



export default function NasaCard() {

 const [photo, setPhoto] = useState([])

 useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OetXKIRjqEMceTmEcD6vcXiZgHNeT9PEYIODKpTa')
    .then( response => {
        console.log('success!', response)
        setPhoto(response.data)
    })
    .catch(error => console.log('Oh No!', error))
    }, [])

    

  return (
    <div className="nasaPhoto">
      <div className='photo-container'>
          {photo.map(photo => <NasaPhoto key={photo.id} photo={photo} />)}
               
      </div>
    </div>
  );
}