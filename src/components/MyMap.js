import React, { useEffect } from 'react';
import { Map, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dataGeoJson from '../data/countries';

const MyMap = () => {
  useEffect(() => {
    console.log(dataGeoJson);
  });
  const styleObj = {
    fillColor: 'yellow',
    color: 'black',
    weight: 2,
    fillOpacity: 0.1,
  };
  const onEachFeature = (feature, layer) => {
    const countryName = feature.properties.ADMIN;
    console.log(countryName);
    layer.bindPopup(countryName);
    layer.options.color = 'black';
    let opacity = parseFloat(Math.random().toString().substring(0, 3));
    console.log('opacity:', opacity);
    console.log('opacity type:', typeof opacity);
    layer.setStyle({
      fillOpacity: opacity,
    });
    layer.on({
      click: (event) => {
        console.log(event.target.feature.properties.ADMIN);
        event.target.setStyle({
          color: 'blue',
          fillOpacity: 1,
        });
      },
    });
  };
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>My Map!</h2>
      <Map
        style={{ width: '100%', height: '600px' }}
        zoom={10}
        center={[42.884418, 74.576622]}
      >
        <GeoJSON
          data={dataGeoJson}
          style={styleObj}
          onEachFeature={onEachFeature}
        />
      </Map>
    </div>
  );
};

export default MyMap;
