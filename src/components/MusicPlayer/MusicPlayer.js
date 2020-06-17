import React, { useContext } from 'react';
import AudioPlayer, { handleProgress } from 'react-modular-audio-player';

import { AppContext } from '../../context';

function MusicPlayer() {
    // ===================================================================================

    /* 1. Onsubmit of the load music button the following needs to happen
        1. Select the textarea 
        2. Load the track element into a variable
        3. Set a path to null
        4. Run a function that grabs the input of the input vale and creates a new blob
        5. Sets the new blob to the src attribute of the track element

    */
    var input = document.querySelector("textarea[ name = 'input' ]");

    var download = document.getElementById("track");

    var downloadUrl = null;

    function handleChange() {
        input.addEventListener("input", updateDownloadHref, false);

        updateDownloadHref();

    }

    function updateDownloadHref() {
        var blob = new Blob(
            [input.value], // Blob parts.

            {
                type: "text/vtt;charset=utf-8",
            }
        );

        if (downloadUrl) {
            URL.revokeObjectURL(downloadUrl);
        }

        downloadUrl = URL.createObjectURL(blob);

        download.setAttribute("src", downloadUrl);

        console.group("Object URL");

        console.log("Text:", input.value);

        console.log("URL:", downloadUrl);

        console.groupEnd();
    }

    // ===================================================================================

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
            {/* =============================================================================================== */}

            {/*  */}
            <textarea onChange={handleChange} name="input"></textarea>
            <video
                poster="https://image.shutterstock.com/image-photo/black-background-texture-pattern-all-260nw-425112010.jpg"
            >
                <source
                    src="https://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
                    type="audio/mp3"
                />

                <track id="track" kind="captions" srclang="en" src="" />
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