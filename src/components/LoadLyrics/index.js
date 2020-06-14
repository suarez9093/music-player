import React, { useContext } from 'react';
import './style.css';
import { AppContext } from '../../context';

function LoadLyrics() {
    const { lyrics } = useContext(AppContext);
    return (

        <>
            <div className="lyric-box-container">

                <p>{lyrics}</p>
            </div>
        </>
    )
};

export default LoadLyrics