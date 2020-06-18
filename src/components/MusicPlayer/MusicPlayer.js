import React, { useContext } from 'react';
import AudioPlayer, { handleProgress } from 'react-modular-audio-player';

import { AppContext } from '../../context';

function MusicPlayer() {
    // ===================================================================================
    let url = null;
    /* 1. Onsubmit of the load music button the following needs to happen
        1. Select the textarea 
        2. Load the track element into a variable
        3. Set a path to null
        4. Run a function that grabs the input of the input vale and creates a new blob
        5. Sets the new blob to the src attribute of the track element

    */


    function handleInput(e) {
        const { value } = e.target
        console.log('textarea', value)

        let blob = new Blob(
            [value],
            {
                type: 'text/vtt;charset=utf-8'
            }
        )

        if (url) {
            URL.revokeObjectURL(url);
        }
        url = URL.createObjectURL(blob)

        setCaptionSource(url)
    }

    // ===================================================================================

    const { defaultPlaylist, songData, captionSource, setCaptionSource } = useContext(AppContext)
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
            {/* =============================================================================================== */}

            {/*  */}
            <textarea onChange={handleInput} name="input"></textarea>
            <video
                controls
                poster="https://image.shutterstock.com/image-photo/black-background-texture-pattern-all-260nw-425112010.jpg"
            >
                <source
                    src="https://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
                    type="audio/mp3"
                />

                <track id="track" kind="captions" srcLang="en" src={captionSource} />
            </video>
            {/* =============================================================================================== */}
            {/*  */}
            {/* <AudioPlayer
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

            /> */}
        </div>
    )
};



export default MusicPlayer


// <script type="text/javascript">
// var input = document.querySelector("textarea[ name = 'input' ]");

// var download = document.getElementById("track");

// var downloadUrl = null;

// input.addEventListener("input", updateDownloadHref, false);

// updateDownloadHref();

// function updateDownloadHref() {
//   var blob = new Blob(
//     [input.value], // Blob parts.

//     {
//       type: "text/vtt;charset=utf-8",
//     }
//   );

//   if (downloadUrl) {
//     URL.revokeObjectURL(downloadUrl);
//   }

//   downloadUrl = URL.createObjectURL(blob);

//   download.setAttribute("src", downloadUrl);

//   console.group("Object URL");

//   console.log("Text:", input.value);

//   console.log("URL:", downloadUrl);

//   console.groupEnd();
// }
// </script>