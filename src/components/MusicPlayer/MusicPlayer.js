import React, { useContext } from 'react';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { AppContext } from '../../context';

function MusicPlayer() {
    const { playlist } = useContext(AppContext)
    return (
        <div>

            <ReactJkMusicPlayer audioLists={playlist} autoPlay={false} mode="full" />
        </div>
    )
};

export default MusicPlayer