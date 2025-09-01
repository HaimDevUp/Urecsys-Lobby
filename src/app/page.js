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
