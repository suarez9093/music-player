import React, { useState, createContext } from "react"
const AppContext = createContext()

function AppContextProvider(props) {
    const [musicSource, setMusicSource] = useState()

    const [modal, setModal] = useState(false);
    function toggle() {
        setModal(!modal);
    };


    function setSource(source) {
        setMusicSource(source)
    }

    return (
        <AppContext.Provider value={{ musicSource, setSource, modal, toggle }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }
