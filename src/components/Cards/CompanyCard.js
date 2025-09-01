

import "./Cards.scss";

export default function CompanyCard({ isHebrew }) {
  const texts = isHebrew ? {
    text: "יוצרים עבורכם סביבת עבודה בטוחה ובריאה, ומפחיתים את ההשפעה הסביבתית של הבניין.",
    location: "פייבר, תל אביב"
  } : {
    text: "Making sure you will have a safer and healthier workspace ,while reducing building environmental impact.",
    location: "Fiverr, Tel-Aviv Office Team"
  };
  return (
    <div className="urecsys-lobby--card company">
      <div className={`urecsys-lobby--company-content ${isHebrew ? "hebrew" : ""}`}>
        <img src="/Fiverr.png" alt="Fiverr" />
        <div style={{ color: "#000000CC" }}>
          {texts.text}
        </div>
        <p>
          {texts.location}
        </p>
      </div>
      <div className="urecsys-lobby--company-footer">
        <img src="/FiverrBuild.png" alt="Fiverr" className="urecsys-img" />
      </div>
    </div>
  );
}








