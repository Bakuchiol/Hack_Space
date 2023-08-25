import './App.css';
import { useEffect, useState } from 'react';
import key from './API/key'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
      <Header />
      <div className='imageWrapper'>
        {imgData.map((img,i) => {
          return (
                <div key={i} className='nasaImages'>
                  <img src={img.url} alt='nasa images' className='imageSize'/>
                </div>
          )
        })}
      </div>
      <Footer />

        {/* <img src={imgData.url} alt=""/>
        <h1>{imgData.title}</h1>
        <p>{imgData.explanation}</p> */}
    </div>
  );
}

export default App;