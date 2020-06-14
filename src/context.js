import React, { useState, createContext } from "react"
const AppContext = createContext()

function AppContextProvider(props) {
    const [songArray, setSongArray] = useState([])
    const [isPlaying, setIsPlaying] = useState()
    const [song, setSong] = useState({ song: "", artist: "", link: "" })
    const [modal, setModal] = useState(false);
    function toggle() {
        setModal(!modal);
    };

    function handleChange(e) {
        const { name, value } = e.target
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
        setSongArray([...songArray, songToLower])
        // setSong({ song: "", artist: "", link: "" })
        setModal(!modal)

    }

    // function onTrackChange(source) {
    //     setIsPlaying(() => {
    //         source.refs.audio.pause()
    //         source.refs.audio.load()
    //         source.refs.audio.play()
    //     })

    // }
    return (
        <AppContext.Provider value={{ setSong, setSource, modal, song, handleChange, toggle, songArray, isPlaying }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }
