import React from 'react';

const NasaPhoto =({photo}) => {
    return (
        <div className='Nasa-card' key=''>
            <h1 className='Headline'>Nasa Astronomy Photo of the Day</h1>
            <h2 className='Photo-Title'>{photo.title}</h2>
            <p className='date'>Today's Date is {photo.date} </p>  
            <img className='Nasa-Image' alt='stars' src={photo.url} />
            <p className='description'>{photo.explanation}</p>
            <h2 className='copyright'>Courtesy Of: {photo.copyright}</h2>
                       
        </div>
    );
}

export default NasaPhoto