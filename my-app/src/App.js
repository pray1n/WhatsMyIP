import logo from './logo.svg';
import './App.css';
import Alert from '@mui/material/Alert';
import { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps"

function App() {
  const [loadedIP, setLoadedIP] = useState("")
  useEffect(() => { getData()}, [])
  const getData = async () => {
     
  
    try {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_bADom2GJMtoutlcVw7Q9JoRzQWc5O&ipAddress`)
    console.log("test")
    
    if (response.ok) {
      console.log("Reponse is Okay")
      const result = await response.json();
      setLoadedIP(result)}


    } catch (e) {
      console.log('Error')
    }
    }
    
    

    return(
    <div>
    <Alert severity="success">Successfully fetched your Data!</Alert>
    
    {/* <Map height={450} width={650} defaultCenter={[loadedIP.location.lat, 4.6997]} defaultZoom={11}>
        <Marker width={45} anchor={[loadedIP.location.lat, 4.6997]} />
    </Map>  */}
    
    <p>{!loadedIP ? "Data is Loading" : loadedIP.ip}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.country}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.region}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.lat}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.lng}</p>
    
    
    </div>)
}

export default App;
