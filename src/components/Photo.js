import React from 'react';

const Photo = (props) => {
    const url = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`
    return (
        <li>
            <img src={url} alt={props.query} />
        </li>
    );
}

export default Photo;