import React from 'react'

function Nasa(props) {

    // const nasa = props.data

  return (
    <div>
      <h1>hi</h1>
      {props.data.map((img,i) => {
        return (
            <div key={i}>
                <img src={img.url} alt="" />
            </div>
        )
      })}
    </div>
  )
}

export default Nasa
