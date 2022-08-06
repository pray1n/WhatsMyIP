import logo from './logo.svg';
import './App.css';
import Alert from '@mui/material/Alert';
import { useState, useEffect } from "react";

function App() {
  const [loadedIP, setLoadedIP] = useState("")
  useEffect(() => { getData()}, [])
  const getData = async () => {
     
  
    try {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_bADom2GJMtoutlcVw7Q9JoRzQWc5O&ipAddress=`)
    console.log(response)
    
    if (response.ok) {
      console.log("Reponse is Okay")
      const result = await response.json();
      setLoadedIP(result)}
      return(
        <div>
        <Alert severity="success">This is a success alert — check it out!</Alert>
        </div>
    )

    } catch (e) {
      console.log('Error')
    }
    }
    

    return(
    <div>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.ip}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.country}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.region}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.city}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.postcode}</p>

    
    </div>)
}

export default App;
