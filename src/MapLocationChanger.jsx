import React, { useState, useRef } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";

const ZOOM = 15;

const mapContainerStyle = {
  width: "400px",
  height: "400px",
};

const center = { lat: 37.7749, lng: -122.4194 };

const GoogleMapWithSearchBox = ({ setLocation }) => {
  
  const [map, setMap] = useState(null);
  const autocompleteRef = useRef(null);
  const markerRef = useRef(null);

  const handlePlaceSelected = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.geometry) {
      const location = place.geometry.location;

      if (markerRef.current) {
        markerRef.current.position = location;
      } else {
        markerRef.current = new google.maps.marker.AdvancedMarkerElement({
          position: location,
          map,
        });
      }

      if (map && location) {
        console.log(location)
        setLocation(location);
        map.panTo(location);
      }
    }
  };

  const onMapLoad = (loadedMap) => {
    setMap(loadedMap);
  };

  return (
    <>
      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={handlePlaceSelected}
      >
        <input
          type="text"
          placeholder="Search a location"
          style={{ width: "300px", padding: "10px", fontSize: "16px" }}
        />
      </Autocomplete>
      <br />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={ZOOM}
        center={center}
        onLoad={onMapLoad}
        options={{
          mapId: "50add5b04aece2b1",
          mapTypeControl: false,
          streetViewControl: false,
        }}
      />
    </>
  );
};

export default GoogleMapWithSearchBox;
