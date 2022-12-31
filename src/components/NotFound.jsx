import React from 'react'

export default function NotFound() {
    return (
        <div style={{ padding: "20%" }}>
            <center>
                <h1>404 Not Found</h1>
                <div className='notfound'>
                    <a href="/" className='notfound-button'>Go Back and Logout</a>
                </div>
            </center>
        </div>
    )
}
