import React from 'react';

const NasaPhoto =({data}) => {
    return (
        <div className='Nasa-card' key=''>
            <h1 className='Headline'>Nasa Astronomy Photo of the Day</h1>
            <h2 className='Photo-Title'>{data.title}</h2>
            <p className='date'>Today's Date is {data.date} </p>  
            <img className='Nasa-Image' alt='stars' src={data.url} />
            <p className='description'>{data.explanation}</p>
            <h2 className='copyright'>Courtesy Of: {data.copyright}</h2>
                       
        </div>
    );
}

export default NasaPhoto