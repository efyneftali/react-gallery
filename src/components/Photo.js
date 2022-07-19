import React from 'react';

//makes each img displayed in the gallary
const Photo = (props) => {
    const url = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`
    return (
        <li>
            <img src={url} alt={props.id} />
        </li>
    );
}

export default Photo;