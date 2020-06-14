import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context';
import BabyComeBack from '../../assets/baby_come_back.mp3';

function MusicPlayer() {

    const { song, lyrics } = useContext(AppContext)


    useEffect(() => {
        document.getElementById('audioFile').src = song.link
    }, [song])
    return (
        <div>
            <audio id='audioFile' src={song.link} controls>
                Your browser does not support the audio element.
</audio>
            <p id="lyrics">

                {lyrics}
            </p>
        </div>
    )
}

export default MusicPlayer; 