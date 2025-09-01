"use client";
import "./Home.scss";

import { AQI, AirQuality, Co2, IvsOAirPollition, Fiverr } from "@/components/Cards";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVertical, setIsVertical] = useState(false);
  const [isHebrew, setIsHebrew] = useState(false);

  useEffect(() => {
    setIsVertical(window.innerHeight > window.innerWidth);

    // קריאת פרמטרים מה-URL
    const urlParams = new URLSearchParams(window.location.search);
    setIsHebrew(urlParams.get("isHebrew") === "true");
  }, []); // dependency ריק - רק פעם אחת

  useEffect(() => {
    setIsVertical(window.innerHeight > window.innerWidth);
  }, []);

  const data = JSON.parse({
    "CO2_emissions_reduction_kg": 618.7187448675475,
    "energy_reduction_percentage": 32.0750526547908,
    "indoor_air_pollution_reduction_percentage": 15.151788060404014,
    "site_name_en": "Fiverr",
    "site_name_local": "\u05e4\u05d9\u05d9\u05d1\u05e8"
  });

  return (
    <div className={`home ${isHebrew ? "hebrew" : ""}`}>
      <div className={`urecsys-lobby--cards ${isVertical ? "vertical" : ""}`}>
        <AQI isHebrew={isHebrew} />
        <div className="urecsys-lobby--cards-right">
          <AirQuality isHebrew={isHebrew} />
          <Co2 isHebrew={isHebrew} />
          <IvsOAirPollition isHebrew={isHebrew} />
          <Fiverr isHebrew={isHebrew} />
        </div>
      </div>
    </div>
  );
}
