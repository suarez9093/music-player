import React, { useContext } from 'react';
import { Player, ControlBar, ReplayControl, ForwardControl, ClosedCaptionButton, BigPlayButton } from 'video-react';
import caption from './captions.vtt';
import './style.css';

import { AppContext } from '../../context';


function MusicPlayer() {

    const { songData, captionSource } = useContext(AppContext)

    return (
        <div >
            <Player
                // fluid={false} width={}
                src={!songData.src ? "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3" : songData.src}>
                <track
                    kind="captions"
                    src={!captionSource ? caption : captionSource}
                    srcLang="en"
                    label="English"
                    default />
                <BigPlayButton position="center" />
                <ControlBar autoHide={true}>
                    <ReplayControl seconds={5} order={2.1} />
                    <ForwardControl seconds={5} order={3.1} />
                    <ClosedCaptionButton order={7} />
                </ControlBar>
            </Player>


        </div >
    )
};



export default MusicPlayer

