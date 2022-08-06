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


    if (response.ok) {
      console.log("Reponse is Okay")
      const result = await response.json();
      setLoadedIP(result)}


    } catch (e) {
      console.log('Error')
    }
    }


const lat = () =>  !loadedIP ? "Data is Loading" : loadedIP.location.lat
const lng = () =>  !loadedIP ? "Data is Loading" : loadedIP.location.lng
    return(
    <div>
    <Alert severity="success"> Working</Alert>

    <Map height={300}  defaultCenter={[lat, lng]} defaultZoom={11}>
      <Marker width={50} anchor={[lat, lng]} />
    </Map> 

    {/* <Map height={300} width={450} defaultCenter={[loadedIP.location.lat, loadedIP.location.lng]} defaultZoom={11}>
      <Marker width={50} anchor={[loadedIP.location.lat, loadedIP.location.lng]} />
    </Map> */}

     {/* <Map height={300} width={450} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map> */}

    <p>{!loadedIP ? "Data is Loading" : loadedIP.ip}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.country}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.region}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.lat}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.lng}</p>
    <p>{!loadedIP ? "Data is Loading" : loadedIP.location.country}</p>
    <img
      src={`https://flagcdn.com/h120/${!loadedIP ? "Data is Loading" : loadedIP.location.country.toLowerCase()}.png`}
      height="120"
      alt="New Mexico"></img>


    </div>)
}

export default App;
