import React, { useContext } from 'react';
import AudioPlayer from 'react-modular-audio-player';

import { AppContext } from '../../context';

function MusicPlayer() {
    const { songData } = useContext(AppContext)
    let rearrangedPlayer = [
        {
            className: "tier-top",
            style: { margin: "0.3rem" },
            innerComponents: [

                {
                    type: "play",
                    style: { width: "fit-content" }
                },
                {
                    type: "rewind",
                    style: { width: "fit-content" }
                },
                {
                    type: "forward",
                    style: { width: "fit-content" }
                },
                {
                    type: "time",
                    style: { width: "fit-content" }
                },
                {
                    type: "seek"
                }
            ]
        },

        {
            className: "tier-bottom",
            style: { margin: "0rem 0.3rem 0.3rem 0.3rem" },
            innerComponents: [
                {
                    type: "name",


                },
                {
                    type: "volume"
                }
            ]
        }
    ]

    let playlists = [
        {
            src: "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
            title: "Despacito",
            artist: "Luis Fonsi"
        },
        {
            src: songData.link,
            title: songData.title,
            artist: songData.artist
        }
    ]
    return (
        <div>

            <AudioPlayer
                rearrange={rearrangedPlayer}
                hideLoop={true}
                iconSize="2em"
                fontSize="large"
                audioFiles={playlists}
            // playerWidth="10em"

            />
        </div>
    )
};

export default MusicPlayer