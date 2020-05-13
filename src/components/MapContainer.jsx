import React from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapContainer = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBexNK1id7ZmiC1xWPIwpU5EVkp9Mc82RU&libraries=places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 38.916663, lng: 121.40 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 38.916663, lng: 121.40 }}/>
      )}
    </GoogleMap>
  ));

  export { MapContainer }