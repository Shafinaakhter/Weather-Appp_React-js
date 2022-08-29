import './App.css';
import React, { useState } from 'react'
import axios from 'axios';

function App() {

  // const urlOne = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={2573791178b9f9021986774db1289720}`

  // const urlTwo = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=2573791178b9f9021986774db1289720`

  const apiKey = '2573791178b9f9021986774db1289720'
  const [data, setData] = useState({})
  const [inputCity, setInputCity] = useState("")

  const getWeatherDetails = (cityName) => {

    if(!cityName) return

    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=" + apiKey
    axios.get(apiURL).then((res)=>{
      console.log("response", res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log('err', err)
    })
  }

 

  const handleChangeInput = (event) => {
    console.log(event.target.value)
    setInputCity(event.target.value)
  }


  const handleClick = () => {
    getWeatherDetails(inputCity)
  }
  
  


  return (
    <>    
      <div className="col-md-12">
        <div className="weatherBg">
          <img src="./image/weather.jpeg" alt="" />
          

          <div className="d-grid gap-3 col-4 mt-4 text">
            <h2 className='heading'>Weather App</h2>
            <input type="text" className='form-control' value={inputCity} onChange={handleChangeInput} />
            <button className='btn btn-primary' type='button' onClick={handleClick}>Search</button>
          </div>
        </div>
      </div>




      <div className="col-lg-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img src="./image/cloud.png" alt="not found" />
          <h5 className='weatherCity'>{data?.name}</h5>
          <h6 className='weatherTemp'>{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        </div>
      </div>


    </>
  );
}

export default App;
