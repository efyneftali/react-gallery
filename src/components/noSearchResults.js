import React from 'react'

//displays usr friendly matches when the API is not able to img from user input
const NoSearchResults = () => {
    return (
        <div className="photo-container">
            <ul>
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>Your search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    );
}

export default NoSearchResults