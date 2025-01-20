import React from "react";
import "./Sponsors.css";
import Sponsors01 from '../../imgs/Sponsors-01.png'
import Sponsors02 from '../../imgs/Sponsors-02.png'
import Sponsors03 from '../../imgs/Sponsors-03.png'
import Sponsors04 from '../../imgs/Sponsors-04.png'
import Sponsors05 from '../../imgs/Sponsors-05.png'
import Sponsors06 from '../../imgs/Sponsors-06.png'
import Sponsors07 from '../../imgs/Sponsors-07.png'
import Sponsors08 from '../../imgs/Sponsors-08.png'
import Sponsors09 from '../../imgs/Sponsors-09.png'


const Sponsors = () => {
  const sponsorsTop = [
    { name: "Brava", src: Sponsors01, alt: "Brava Logo" },
  ];

  const sponsorsMiddle = [
    { name: "Penalty", src: Sponsors02, alt: "Penalty Logo" },
    { name: "Sanepar", src: Sponsors03, alt: "Sanepar Logo" },
    { name: "Paraná", src: Sponsors04, alt: "Paraná Governo Logo" },
    { name: "Bioprev", src: Sponsors05, alt: "Bioprev Logo" },
  ];

  const sponsorsBottom = [
    { name: "Quiminga", src: Sponsors06, alt: "Quiminga Logo" },
    { name: "Umuprev", src: Sponsors07, alt: "Umuprev Logo" },
    { name: "Leão", src: Sponsors08, alt: "Leão Metais Logo" },
    { name: "LucroBet", src: Sponsors09, alt: "LucroBet Logo" },
  ];

  return (
    <section className="sponsors-section">
      <div className="sponsors-top">
        {sponsorsTop.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.src}
            alt={sponsor.alt}
            className="sponsor-logo-top"
          />
        ))}
      </div>

      <div className="sponsors-row">
        {sponsorsMiddle.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.src}
            alt={sponsor.alt}
            className="sponsor-logo"
          />
        ))}
      </div>

      <div className="sponsors-row">
        {sponsorsBottom.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.src}
            alt={sponsor.alt}
            className="sponsor-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
