import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context';

function MusicPlayer() {
    const { song, isPlaying, onTrackChange } = useContext(AppContext)
    console.log('MusiPlayer song: ', song)
    let source = song.link;

    useEffect(() => {
        source = song.link
    }, [song])
    return (
        <div>
            <audio id='player' controls refs="audio">
                {/* <source src={Song} type="audio/ogg" /> */}
                <source src={source} type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
        </div>
    )
}

export default MusicPlayer; 