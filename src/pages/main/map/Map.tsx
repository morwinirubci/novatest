import { useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { useAppSelector } from "../../../hooks/hook";
import marker from "../../../assets/img/map-marker.png";
import "./Map.css";

const Map:React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const markers = useAppSelector((state) => state.markers.markers);

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  return (
    <>
      <div className="map-section">
        <div className="container">
          <div className="map">
            <p className="map__title title">Магазины мерча ведьмака</p>
            {isLoaded ? (
              <GoogleMap
                center={{ lat: 55.755864, lng: 37.617698 }}
                zoom={10}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={{
                  disableDefaultUI: true,
                }}
              >
                {markers.map(({ id, name, position }) => (
                  <MarkerF
                    key={id}
                    position={position}
                    onClick={() => handleActiveMarker(id)}
                    icon={{
                      url: marker,
                    }}
                  >
                    {activeMarker === id ? (
                      <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                        <div className="map__marker-info">
                          <p>{name}</p>
                        </div>
                      </InfoWindowF>
                    ) : null}
                  </MarkerF>
                ))}
              </GoogleMap>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
export default Map;
