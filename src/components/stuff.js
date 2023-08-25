import './App.css';
import { useEffect, useState } from 'react';
import key from './API/key'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

 const [imgData, setImgData] = useState([0])

 const apikey = key

 const getImage = async () =>{
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=10`);
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
                        <div className='captions'>
                            <h3>{img.title}</h3>
                            <p>{img.copyright}</p>
                            <p>{img.date}</p>
                        </div>
                        <img src={img.url} alt='NASA images' className='imageSize' />
                    </div>
                )
            })}
        </div>
      <Footer />
    </div>
  );
}


export default App;