import React, { useContext } from 'react';
import { Player, ControlBar, ReplayControl, ForwardControl, ClosedCaptionButton, BigPlayButton } from 'video-react';
import caption from './captions.vtt'


import { AppContext } from '../../context';


function MusicPlayer() {

    const { songData, captionSource } = useContext(AppContext)

    return (
        <div>
            <Player autoplay poster="https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80"
                src={!songData.src ? "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3" : songData.src}>
                <track
                    kind="captions"
                    src={!captionSource ? caption : captionSource}
                    srcLang="en"
                    label="English"
                    default />
                <BigPlayButton position="center" />
                <ControlBar autoHide={false}>
                    <ReplayControl seconds={5} order={2.1} />
                    <ForwardControl seconds={5} order={3.1} />
                    <ClosedCaptionButton order={7} />
                </ControlBar>
            </Player>
        </div >
    )
};



export default MusicPlayer

