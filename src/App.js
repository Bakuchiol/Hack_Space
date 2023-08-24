import './App.css';
import { useEffect, useState } from 'react';

function App() {


 const [nasa, setNasa] = useState("")

 const key = "UEjOoXHrnysuMcjhhzFFPd8akMQogQsKL2Yoin9H"

 const getImage = async () =>{
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}$count=10`);
  const data = await response.json();
  console.log(data);
    
    setNasa(data)
 }

 useEffect(() =>{
  getImage()
 }, [])




  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {nasa.map((img,i) => {
        return(
          <div>
            {img.title[0]}
          </div>
        )
      })}
        {/* <img src={nasa.url} alt=""/>
        <h1>{nasa.title}</h1>
        {nasa.explanation} */}
    </div>
  );
}

export default App;