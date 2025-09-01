

import "./Cards.scss";
import Co2Chart from "../graphs/Co2Chart";

export default function AirQuality({ isHebrew }) {

  const texts = isHebrew ? {
    title: "הפחתת פליטות גזי חממה",
    subtitle: "מעודכן"
  } : {
    title: 'CO2 Emissions <br/> Reduction',
    subtitle: "Updated daily"
  };

  const data = {
    datasets: [
      {
        data: [50, 50], 
        backgroundColor: ["#0000001A", "#FC2E2E"], 
        borderWidth: 0,
        hoverOffset: 0,
      },
    ],
  };

    return (
        <div className="urecsys-lobby--card co2">
            <div className="urecsys-lobby--card-header">
                <div className="urecsys-title" 
                     dangerouslySetInnerHTML={{ __html: texts.title }}>
                </div>
                <div className="urecsys-subtitle">
                    {texts.subtitle}
                </div>
            </div>
            <Co2Chart data={data} />
        </div>
    );
}








