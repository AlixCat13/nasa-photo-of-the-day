import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NasaPhoto from './NasaPhoto';



export default function NasaCard() {

 const [data, setData] = useState([]);

 useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OetXKIRjqEMceTmEcD6vcXiZgHNeT9PEYIODKpTa')
    .then( response => {
        console.log('success!', response)
        setData(response.data)
    })
    .catch(error => console.log('Oh No!', error))
    }, [])

    

  return (
    <div className="nasaPhoto">
       {data.map(data => <NasaPhoto key={data.id} data={data} />)}
    </div>
  );
}

