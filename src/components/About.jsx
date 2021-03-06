// React
import React, { useEffect } from 'react';

// Components
import UnderlinedText from '../widgets/UnderlinedText';

// Assets & Style
import pp from '../assets/pp.png';
import '../styles/components/About.scss';

import aboutAnimation from '../animations/AboutAnimation';

const About = () => {
  useEffect(() => {
    aboutAnimation()
  });

  return (
    <div className="about">
      <div className="content">
        <div className="left-content">
          <div className="title">
            <h1>Hola! &#x1F44B;</h1>
            <h1>Soy Eloy</h1>
          </div>
          
          <div className="copy">
            <div className="phrases">
              <h3 className="line">
                <span className="text">
                  Tengo 22 años. Soy ingeniero informático
                </span>
              </h3>
              <h3 className="line">
                <span className="text">Dedicado al&nbsp;</span>
                <UnderlinedText controller="first" text="diseño y desarrollo" />
              </h3>
              <h3 className="line">
                <span className="text">De aplicaciones&nbsp;</span>
                <UnderlinedText
                  controller="second"
                  text="móvil y web"
                  style={{ backgroundColor: 'rgba(237, 72, 72, 0.4)' }}
                />
              </h3>
            </div>
          </div>
          
        </div>
        <div className="right-image">
          <div className="shape" />
          <div className="wrapper">
            <img className="image" src={pp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
