import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/app_context'

function ImageList() {

    // context
    let { fetchNasa } = useContext(AppContext);
    let { url } = useContext(AppContext);

    // fetch API
    useEffect(() => {
        fetchNasa()
    }, [])

  return (
    <div>
      {url ? (
        url.map((img, i) => {
            console.log('images?', img)
            return (
                <div key={i}>
                    <div>
                        <img src={img.url} alt="" />
                        <p>{img.title}</p>
                    </div>
                </div>
            )
        })
      ):(
        <h2>LOADING ...</h2>
      )}
    </div>
  )
}

export default ImageList
