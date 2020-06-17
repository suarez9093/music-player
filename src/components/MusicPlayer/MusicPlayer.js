import React, { useContext } from 'react';
import AudioPlayer from 'react-modular-audio-player';

import { AppContext } from '../../context';

function MusicPlayer() {
    const { defaultPlaylist, songData } = useContext(AppContext)
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


    return (
        <div>

            <AudioPlayer
                rearrange={rearrangedPlayer}
                hideLoop={true}
                iconSize="2em"
                fontSize="large"
                audioFiles={[
                    {
                        src: songData.src,
                        title: songData.title,
                        artist: songData.artist
                    }]}

            />
        </div>
    )
};

export default MusicPlayer