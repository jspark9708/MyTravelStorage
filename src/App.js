import { MapContainer } from "react-leaflet";
import { GeoJSON } from "react-leaflet";
import japanGeoJSON from "./japan.json";

const App = () => {
  // Create the DottedMap

  return (
    <div>
      {/* japan.jason 정보를 기반으로 지도를 그린다 */}
      <div style={{ width: "100%", height: "500px" }}>
        <MapContainer
          center={[35.682839, 139.759455]}
          zoom={3}
          style={{ width: "100%", height: "100%" }}
        >
          <GeoJSON data={japanGeoJSON} />
        </MapContainer>
      </div>
    </div>
  );
};

export default App;
