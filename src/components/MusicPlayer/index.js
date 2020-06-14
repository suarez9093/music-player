import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context';
import BabyComeBack from '../../assets/baby_come_back.mp3';

function MusicPlayer() {
    let audioPlayer = document.getElementById('audioFile')
    let subtitle = document.getElementById('lyrics')
    let syncData = []
    const { song, isPlaying, onTrackChange, lyrics } = useContext(AppContext)
    console.log('MusiPlayer song: ', song)
    let source = song.link;

    useEffect(() => {
        source = song.link
    }, [song])
    return (
        <div>
            <audio id='audioFile' src={BabyComeBack} controls>
                {/* <source src={Song} type="audio/ogg" /> */}
                {/* <source src={BabyComeBack} type="audio/mpeg" /> */}
Your browser does not support the audio element.
</audio>
            <p id="lyrics">

                {lyrics}
            </p>
        </div>
    )
}

export default MusicPlayer; 