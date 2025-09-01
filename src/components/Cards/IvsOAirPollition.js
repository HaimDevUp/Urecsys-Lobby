

import "./Cards.scss";
import { InOutAirPollutionChart } from "../graphs";
import { colors } from "@mui/material";

export default function IvsOAirPollition({ isHebrew }) {
  const texts = isHebrew ? {
    title: "השוואה בין זיהום אוויר פנימי לזיהום אוויר חיצוני",
    subtitle: "מעודכן",
    labels: ["איכות אוויר פנים", "איכות אוויר חוץ"]
  } : {
    title: "Indoor VS Outdoor Air Pollution",
    subtitle: "Updated live",
    labels: ["Indoor AQI", "Outdoor AQI"]
  };

  const data = [
    {
      datasets: [
        24, 21, 23.5, 24, 24.5, 20.2, 21.5, 19.5, 24.9, 19.7, 23.4, 23.6, 23.9,
        24.1, 24.4, 24.6, 24.8, 25, 24.7, 24.3, 24, 23.8, 23.5, 23.3, 23.1,
        22.9, 22.7, 22.5, 22.3, 22.1, 22, 22.2, 22.4, 22.6, 22.8, 23, 23.2,
        23.4, 23.6, 23.8, 23.8, 24, 24.2, 24.4, 24.6, 24.8, 25,
      ],
      label: texts.labels[0],
      colors: ["#65B868", "#286F4F", "#EDCE2F"] //legend, bottom, top
    },
    {
      datasets: [
        31, 26, 28.5, 29, 29.5, 25.2, 26.5, 24.5, 29.9, 24.7, 26.5, 27, 27.5,
        28, 27.8, 27.2, 26.7, 26.4, 26.1, 25.9, 26.3, 26.8, 27.1, 27.4, 27.9,
        28.2, 28.5, 28.1, 27.7, 27.3, 27, 26.8, 26.6, 26.4, 26.2, 26, 25.9,
        25.7, 25.6, 25.5, 25.7, 25.9, 26.1, 26.3, 26.5, 26.7
      ],
      label: texts.labels[1],
      colors: ["#F80000", "#EDCE2F", "#FC2E2E"] //legend, bottom, top
    },
  ]


return (
  <div className="urecsys-lobby--card in-vs-out-air-pollution">
    <div className="urecsys-lobby--card-header">
      <div className="urecsys-title">
        {texts.title}
      </div>
      <div className="urecsys-subtitle">
        {texts.subtitle}
      </div>
    </div>
    <InOutAirPollutionChart data={data} />
  </div>
);
}








