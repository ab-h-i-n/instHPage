import React from 'react';
import Pdetails from './personaldetails';

function YourStorie(){
    return <div className='storie'>
        <div className='ring'>
            <div className="container">
                <img src={Pdetails.dp}/>
            </div>
        </div>
        <p>Your story</p>
    </div>
}

export default YourStorie;