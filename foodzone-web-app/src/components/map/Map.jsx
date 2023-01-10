import React from "react";
import { SMap } from "./Styles";
import Card from "../card/Card";
//import { Main } from "./Styles";
//import { List } from 'react-native-paper';

const Map = () => {
  return (
    <SMap>
      <div className="map"></div>
      <div className="listDisp">
        <div className="listBar">
          <h2>Restaurants Near You</h2>
        </div>
        <div className="listArea">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/*
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
      */}
    </SMap>
  );
};

export default Map;
