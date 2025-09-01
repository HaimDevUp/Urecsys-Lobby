

import "./Cards.scss";
import { AirQualityChart } from "../graphs";

export default function AirQuality({ isHebrew }) {
    const texts = isHebrew ? {
        title: "מדד איכות אוויר",
        subtitle: "מעודכן",
        labels: ["פנים", "חוץ"]

    } : {
        title: "Air Quality",
        subtitle: "Updated daily",
        labels: ["Indoor", "Outdoor"]
    };

    return (
        <div className="urecsys-lobby--card air-quality">
            <div className="urecsys-lobby--card-header">
                <div className="urecsys-title">
                    {texts.title}
                </div>
                <div className="urecsys-subtitle">
                    {texts.subtitle}
                </div>
            </div>
            <AirQualityChart labels={texts.labels} points={[40, 200]} />
        </div>
    );
}








