"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./styles.css";

export default function MapYandex() {
  return (
    <div className="map">
      <YMaps>
        <Map
          style={{
            width: "100%",
          }}
          className="inner_map"
          defaultState={{ center: [41.354689, 69.241724], zoom: 16 }}
        >
          <Placemark
            geometry={[41.354689, 69.241724]}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/icons/mapplacemark.svg",
              iconImageSize: [50, 50],
              iconImageOffset: [-15, -30],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}
