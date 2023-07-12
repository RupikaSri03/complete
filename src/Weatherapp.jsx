import React,{useState} from 'react'
import './weather.css';

const Weatherapp = () => {
  
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          
// console.log(data)
          
        const kelvin = data.main.temp;
          
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }

  return (
    <div id= "container1">
      <center>
        <div className="card1">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="city" onChange={changeHandler} value={city}/> <br /><br />
              <input type="submit" value="Get Temperature" id="btn"/>
            </form><br /> <br />
            <div>
               <h1>{result}</h1> 
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Weatherapp;