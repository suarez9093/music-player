import React, { useContext } from 'react';
import AudioPlayer, { handleProgress } from 'react-modular-audio-player';
import { Player, ControlBar, ReplayControl, ForwardControl, ClosedCaptionButton } from 'video-react';
import caption from './captions.vtt'

import { AppContext } from '../../context';


function MusicPlayer() {

    const { defaultPlaylist, songData, captionSource, handleChange } = useContext(AppContext)

    return (
        <div>


            <Player poster="https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80"
                startTime={300}
                src={!songData.src ? "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3" : songData.src}>
                <track
                    kind="captions"
                    src={!captionSource ? caption : captionSource}
                    srcLang="en"
                    label="English"
                    default />
                <ControlBar autoHide={false}>
                    <ReplayControl seconds={5} order={2.1} />
                    <ForwardControl seconds={5} order={3.1} />
                    <ClosedCaptionButton order={7} />
                    <button></button>
                </ControlBar>
            </Player>
        </div >
    )
};



export default MusicPlayer

