import './App.css';
import { useEffect, useState } from 'react';
import key from './API/key'
// import Nasa from './components/Nasa';

function App() {


 const [imgData, setImgData] = useState([0])

 const apikey = key

 const getImage = async () =>{
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=50`);
  const data = await response.json();
  console.log(data);
    setImgData(data)
 }

 useEffect(() =>{
  getImage()
 }, [])

  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <Nasa data={data}/> */}


      {imgData.map((img,i) => {
        return (
          <div key={i}>
            <img src={img.url} alt=''/>
          </div>
        )
      })}

        {/* <img src={imgData.url} alt=""/>
        <h1>{imgData.title}</h1>
        <p>{imgData.explanation}</p> */}
    </div>
  );
}

export default App;