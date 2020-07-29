import React from 'react';

const NasaPhoto = props => {
    return (
        <div className='Nasa-card' key=''>
          <img className='Nasa-image' alt='stars' src={props.url} />
             <h2 class name='title'>{props.title}</h2>
        </div>
    );
}

export default NasaPhoto