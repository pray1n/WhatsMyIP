import { Map, Marker } from "pigeon-maps"
import "./App"
import { useState, useEffect } from "react";
import loadedIP from "./App"

function Pigeon(){
console.log(loadedIP.location.lat)
    return(
    <Map height={450} width={650} defaultCenter={[loadedIP.location.lat, 4.6997]} defaultZoom={11}>
        <Marker width={45} anchor={[loadedIP.location.lat, 4.6997]} />
    </Map> 
)}

export default Pigeon;