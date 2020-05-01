import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import googleMapStyles from "./GoogleMapStyles";
export class MapContainer extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "420px",
          marginBottom: " 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Map
          google={this.props.google}
          zoom={15}
          styles={this.props.mapStyles}
          initialCenter={{ lat: 9.761927, lng: 79.95244 }}
        >
          <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
        </Map>
      </div>
    );
  }
}

MapContainer.defaultProps = googleMapStyles;

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_API_KEY })(
  MapContainer
);
