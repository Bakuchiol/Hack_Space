import './App.css';
import { useEffect, useState } from 'react';
import key from './API/key'

function App() {


 const [nasa, setNasa] = useState("")

 const apikey = key

 const getImage = async () =>{
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`);
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
        <img src={nasa.url} alt=""/>
        <h1>{nasa.title}</h1>
        {nasa.explanation}
    </div>
  );
}

export default App;