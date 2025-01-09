import React, { useState, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";


const ZOOM = 15;

const mapContainerStyle = {
  width: "400px",
  height: "400px",
};

const center = { lat: 37.7749, lng: -122.4194 };

const Map = ({ location }) => {
  const [map, setMap] = useState(null);
  const autocompleteRef = useRef(null);
  const markerRef = useRef(null);

  const handlePlaceSelected = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.geometry) {

      if (markerRef.current) {
        markerRef.current.position = location;
      } else {
        markerRef.current = new google.maps.marker.AdvancedMarkerElement({
          position: location,
          map,
        });
      }

      if (map && location) {
        map.panTo(location);
      }
    }
  };

  const onMapLoad = (loadedMap) => {
    setMap(loadedMap);
  };

  return (
    <>
      <GoogleMap
        onPlaceChanged={handlePlaceSelected}
        mapContainerStyle={mapContainerStyle}
        zoom={ZOOM}
        center={center}
        onLoad={onMapLoad}
        options={{
          mapId: "50add5b04aece2b1",
        }}
      />
    </>
  );
};

export default Map;
