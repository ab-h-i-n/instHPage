import React from 'react';
import Pdetails from './personaldetails';

function YourStorie(){
    return <div className='storie'>
        <div className="container">
            <img src={Pdetails.dp}/>
        </div>
        <p>Your story</p>
    </div>
}

export default YourStorie;