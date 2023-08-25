import { createContext, useState } from "react";
import axios from "axios";
import key from '../API/key'

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const apikey = key
    const [ url, setUrl ] = useState(null);

    const fetchImages = async() => {
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=50`)
        let info = await res.data;
        console.log('image list', [info]);
        setUrl(info)
    }

    // const fetchImageInfo = async(imageID) => {
    //     const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=50&${imageID}`)
    //     let info = await res.data
    //     setUrl(info)
    // }

    return (
        <AppContext.Provider
            value={{
                url, setUrl,
                fetchImages,
                // fetchImageInfo
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider