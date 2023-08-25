// import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
// import axios from 'axios'

// function ImageInfo(props) {

//     const [ imageInfo, setImageInfo ] = useState()
//     let location = useLocation()

//     const fetchImageInfo = async() => {
//         const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=50`)
//         let info = await res.data
//         setImageInfo(info)
//     }

//     useEffect(()=> {
//       fetchImageInfo(location.state.pic)
//     },[])

//   return (
//     <div id='imageInfoWrap'>
//       <p>{imageInfo?.explanation}</p>
//     </div>
//   )
// }

// export default ImageInfo
