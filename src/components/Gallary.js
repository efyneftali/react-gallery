import React from 'react'
import Photo from './Photo'

import NoSearchResults from './noSearchResults'


const Gallary = (props) =>{
    const results = props.data
    let photos
    
    if (results.length > 0) {
        photos = results.map((photo) => {
            return(
                <Photo 
                    id={photo.id} 
                    server={photo.server} 
                    secret={photo.secret} 
                    key={photo.id}
            /> )
            
        } )
    } else if (props.loading) {
        return (
            <p> Loading...</p>
        )
    }else {
        return (
            photos = <NoSearchResults />
        )    
    }
    
    return(
        <div className="photo-container">
            <h2> Results for: {props.query}</h2>
            <ul>
                {photos} 
            </ul>
        </div>
    )
    
}
export default Gallary