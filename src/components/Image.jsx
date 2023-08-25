import React, { useContext, useEffect} from 'react'
import { AppContext } from '../context/app_context'
import { Link } from 'react-router-dom'

function Image() {

  let { fetchImages } = useContext(AppContext);
  let { url } = useContext(AppContext);

  useEffect(()=>{
    fetchImages()
  },[])

  return (
    <div id='imagesWrapper'>
      <div className="imageBoxes">
        {url ? (
          url.map((pic,i) => {
            console.log('pic', pic)
            return(
              <Link
                to='/imageInfo'
                state={{pic}}
                key={pic.service_version}
              >
                <div key={i} className="imageName">
                  <p>{pic.title}</p>
                </div>
              </Link>
            )
          })
        ) : (
          <h2>LOADING ...</h2>
        )
      }
      </div>
      
    </div>
  )
}

export default Image
