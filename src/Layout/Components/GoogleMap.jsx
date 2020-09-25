import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import googleMapStyles from "./GoogleMapStyles";
import contactData from "../../static/ContactData";
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
          initialCenter={{
            lat: contactData.AddressInfo.Lat,
            lng: contactData.AddressInfo.Lng,
          }}
        >
          <Marker
            position={{
              lat: contactData.AddressInfo.Lat,
              lng: contactData.AddressInfo.Lng,
            }}
          />
        </Map>
      </div>
    );
  }
}

MapContainer.defaultProps = googleMapStyles;

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_API_KEY })(
  MapContainer
);
