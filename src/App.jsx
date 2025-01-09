import "./App.css";
import { useState } from 'react'
import { Routes, Route } from "react-router";

import api from "../api.config"
import Header from "./Header"
import MapLocationChanger from "./MapLocationChanger";
import MapLocation from "./MapLocation";
import { LoadScript } from "@react-google-maps/api";

const GoogleMapsApi = api.GOOGLE_MAPS_API_KEY
const LIBRARIES = ['places', 'marker']

function App() {

  const [mapLocation, setMapLocation] = useState(null);

  return (
    <>
    <LoadScript googleMapsApiKey={GoogleMapsApi} libraries={LIBRARIES} version="weekly" >
    <Header />
      <main>
        
        <Routes>
          <Route path="/" element={<MapLocationChanger location={mapLocation} setLocation={setMapLocation} />}  />
          <Route path="/map" element={<MapLocation location={mapLocation} />}  />
        </Routes>
        
      </main>
      </LoadScript>
    </>
  );
}

export default App;
