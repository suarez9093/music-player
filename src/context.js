import React, { useState, createContext } from "react"
import { searchArtist } from './utils/API';
const AppContext = createContext()

function AppContextProvider(props) {
    // const [isChecked, setIsChecked] = useState(false)
    const [lyrics, setLyrics] = useState();
    // const [songArray, setSongArray] = useState([])
    const [song, setSong] = useState({ song: "", artist: "", link: "", isChecked: false })

    const [modal, setModal] = useState(false);
    function toggle() {
        setModal(!modal);
    };

    function handleChange(e) {
        const { name, value, checked, type } = e.target
        type === "checkbox" ? setSong(prevState => ({

            ...prevState, [name]: checked
        })) :
            setSong(prevState => ({

                ...prevState, [name]: value
            }))

    };

    function setSource() {
        const songToLower = {
            song: song.song.trim().toLowerCase(),
            artist: song.artist.trim().toLowerCase(),
            link: song.link.trim().toLowerCase(),
        }
        // setSongArray([...songArray, songToLower])
        setModal(!modal)

        searchLyrics()
    }

    async function searchLyrics() {
        if (song.isChecked) {
            const artistLyrics = await searchArtist(song.artist, song.song)
            setLyrics(artistLyrics)
        }
    }


    return (
        <AppContext.Provider value={{ searchLyrics, setSong, setSource, modal, song, handleChange, toggle, lyrics }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }
