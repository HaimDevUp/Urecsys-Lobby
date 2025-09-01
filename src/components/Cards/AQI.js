import "./Cards.scss";
import ComparisonChart from "../graphs/ComparisonChart";

export default function AQI({ isHebrew }) {
    const data = [
        { label: "PM2.5", val1: 12, val2: 35 },
        { label: "PM10", val1: 450, val2: 800 },
    ];
    const texts = isHebrew ? {
        street: "רח' אליעזר קפלן 8, תל אביב יפו",
        good: "איכות אוויר-טוב",
        poor: "איכות אוויר-מזיק לבריאות",
        labels: [
            "מדד", "פנים", "חוץ"
        ],
    } : {
        street: "Eliezer Kaplan St 8, Tel Aviv-Yafo",
        good: "Good Indoor Air Quality",
        poor: "Poor Air Quality",
        labels: [
            "Index", "Indoor", "Outdoor"
        ],
    };

    return (
        <div className="urecsys-lobby--card">
            <div className={`urecsys-subtitle centered }`}>
                {texts.street}
            </div>
            <div className="urecsys-lobby--card-header">
                <div className={`urecsys-aqi--header good ${isHebrew ? "hebrew" : ""}`}>
                    <h2>20AQI</h2>
                    <div className={`urecsys-title`}>{texts.good}</div>
                </div>
                <div className={`urecsys-aqi--header poor ${isHebrew ? "hebrew" : ""}`}>
                    <h2>140AQI</h2>
                    <div className={`urecsys-title `}>{texts.poor}</div>
                </div>
            </div>
            <div className="urecsys-aqi--graph">
                <div className="urecsys-aqi--graph-img-wrapper">
                    <img className="urecsys-img" src="/Building.png" alt="Building" />
                </div>
            </div>
            <ComparisonChart data={data} labels={texts.labels} colors={['#65B868', '#F80000']} isHebrew={isHebrew} />
        </div>
    );
}


