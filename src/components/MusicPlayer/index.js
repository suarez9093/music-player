import React, { useState } from 'react';
import Song from './arena.mp3'

function MusicPlayer() {
    return (
        <div>
            <audio controls>
                {/* <source src={Song} type="audio/ogg" /> */}
                <source src={Song} type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
        </div>
    )
}

export default MusicPlayer; 