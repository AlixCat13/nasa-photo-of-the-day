import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NasaPhoto from './NasaPhoto.js'


export default function NasaCard() {

 const [data, setData] = useState({});

 useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OetXKIRjqEMceTmEcD6vcXiZgHNeT9PEYIODKpTa&date=2020-07-30')
    .then( response => {
        console.log('success!', response)
        setData(response.data)
    })
    .catch(error => console.log('Oh No!', error))
    }, [])    

  return (
    <div className='Nasa-card' key=''>
      <NasaPhoto key={data.id} data={data} />
               
    </div>
      );
  }

