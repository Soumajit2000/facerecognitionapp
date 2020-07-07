import React from'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="logo">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 100, width: 100 }} >
                    <div className="Tilt-inner"><img alt='Logo' src={brain}/></div>
                </Tilt>
            </div>
            <div className='pa4'>
                <button className='btn pointer'>Sign Out</button>
            </div>
        </div>
    )
}

export default Navigation;