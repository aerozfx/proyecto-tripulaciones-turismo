import {GoogleMap, Marker} from "@react-google-maps/api"
import { useMemo, useState } from "react";

const Map = () => {
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0
  })
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos) => {
      let { coords } = pos
      let {latitude: lat, longitude: lng} = coords
      setCoords({lat, lng})
    })
  }

  const center = useMemo(() => (coords), [])
  return(
    <>
      <GoogleMap zoom={15} center={center} mapContainerClassName="map-container" options={{
        disableDefaultUI: true,
        mapId: "cce25c7cd1c6e94e",
      }}>
      </GoogleMap>
    </>
  )
};

export default Map;
