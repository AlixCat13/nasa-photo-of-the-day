import React from 'react'


const NasaPhoto = ({ data }) => {
   
return(
   <div className='Photo-Container'>
       <img className='Nasa-Logo' alt='logo' src={require('../Photos/NasaLogo4.jpg')}/>
       <h1 className='Headline'>Nasa Astronomy Photo of the Day</h1>
          <h2 className='Photo-Title'>{data.title}</h2>
             <p className='date'>Today's Date is {data.date} </p>  
            <img className='Nasa-Image' alt='stars' src={data.url} /> 
          <p className='description'>{data.explanation}</p>
        <p className='copyright'>Courtesy of: {data.copyright}</p>
        
    </div> 
  )
}

export default NasaPhoto