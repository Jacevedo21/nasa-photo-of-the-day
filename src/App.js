import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Image from './Components/Image'
import Header from './Components/header'

const API = `https://api.nasa.gov/planetary/apod?`

// const date = 'date=2020-07-16'

var today = new Date();
// console.log(today)

var format = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// console.log(format)


const key = '&api_key=K6GY0nciVcyDcmrA6j0CsdtQGmeKPQC6bEZ2POYV'

// const test = `${API}${format}${key}`


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${API}date=${format}${key}`)
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
      <Header data={data} />
      <Image data={data}/>
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?date=2020-07-16&api_key=K6GY0nciVcyDcmrA6j0CsdtQGmeKPQC6bEZ2POYV