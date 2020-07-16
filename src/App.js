import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Image from './Components/Image'


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=K6GY0nciVcyDcmrA6j0CsdtQGmeKPQC6bEZ2POYV')
    .then(res => {
      setData(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  console.log(data)
  return (
    <div className="App">
      <Image data={data}/>
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=K6GY0nciVcyDcmrA6j0CsdtQGmeKPQC6bEZ2POYV