import React, { useEffect } from 'react';
import { Map, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dataGeoJson from '../data/countries';

const MyMap = () => {
  useEffect(() => {
    console.log(dataGeoJson);
  });
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>My Map</h2>
      <Map
        style={{ width: '100%', height: '600px' }}
        zoom={10}
        center={[42.884418, 74.576622]}
      >
        <GeoJSON data={dataGeoJson} />
      </Map>
    </div>
  );
};

export default MyMap;
