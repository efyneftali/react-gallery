import React from 'react';


//shows 404 when usr navigates to a undefined route
const Error404 = () => {
    return (
        <div className="photo-container">
            <h2> Results </h2>
            <ul>
                <li className="not-found">
                    <h3>404-Route Not Found</h3>
                    <p>Please try again.</p>
                </li>
            </ul>
        </div>
    );
}

export default Error404;