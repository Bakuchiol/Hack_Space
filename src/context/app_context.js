import { createContext, useState} from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    // state
    const [url, setUrl] = useState(null);

    const key = "UEjOoXHrnysuMcjhhzFFPd8akMQogQsKL2Yoin9H"
    

    const fetchNasa = async() => {
        const response = await axios.get('');
        let info = await response.data;
        console.log('images list', [info])
        setUrl(info)
    }

    // experiment
    const getNasaInfo = async(nasaID) => {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        let info = await response.data
        setUrl(info)
    }

    return (
        <AppContext.Provider
        value={{
            url, setUrl,
            fetchNasa,
            getNasaInfo
            // fetchWeapons,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider