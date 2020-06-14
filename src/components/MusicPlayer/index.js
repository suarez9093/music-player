import React, { useState } from 'react';
import songs from '../../songs.json'

function MusicPlayer() {
    console.log(songs[0].url)
    fetch(songs).then(res => res.json).then(data => console.log('data: ', data))
    return (
        <div>
            <audio controls>
                {/* <source src={Song} type="audio/ogg" /> */}
                <source src={songs[0].url} type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
        </div>
    )
}

export default MusicPlayer; 