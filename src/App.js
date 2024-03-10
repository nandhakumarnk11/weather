import { useState } from "react"
import axios from "axios"

function App(){


     const [deg,setdeg] = useState("0")
     const [city,setcity] = useState("france")
     const [desc,setdesc] = useState("rainy")
     const [evalue,setvalue] = useState('')

     function handlechange(event){

        setvalue(event.target.value)

     }

     function getweather()
     {
          var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${evalue}&appid=254cc3f4417f31a3dcde929c3d807e00`)

          weatherdata.then(function (dalta) {
            setdeg(dalta.data.main.temp)
            setcity(dalta.data.name)
            setdesc(dalta.data.weather[0].main)
            
            
          }

          )
     }




    return(
      <div className="flex flex-row justify-center h-[100vh] items-center bgclh"> 
       <div style={{ "backgroundImage": 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)' }} className="p-2 rounded-md shadow h-[45vh]" >
        <h2 className="font-medium mt-5">Hey !🌦️</h2>
        <p className="text-xs  font-medium">DO YOU WANT TO KNOW THE WEATHER REPORT :)</p>
        <input onChange={handlechange} className="rounded-md h-6 text-sm p-1 mt-4 outline-none " placeholder="City Name"></input><br></br>

        <button className="bg-black text-white rounded-md p-1 mt-4 text-xs" onClick={getweather} >GET REPORT ⚡</button>

        <p className="text-lg mt-5 font-medium">Degree:{deg} <br></br>City:{city}<br></br>Weather:{desc}</p>

       </div>
      </div>
    )
  }

  export default App