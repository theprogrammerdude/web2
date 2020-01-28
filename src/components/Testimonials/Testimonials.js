import React from "react";
import "./Testimonials.css";

import rgv from "../../assets/rgv.jpg";
import sri from "../../assets/sri.jpeg";
import linkedin from "../../assets/linkedin.png";

function Testimonials() {
  return (
    <div className="contaimer1">
      <h2>CEO Testimonials</h2>
      <div className="main">
        <div>
          <img src={rgv} alt="" className="profile" />
          <p>
            Gunjan Srivastava
            <br />
            Chairman - Region Asia Pacific Board (Bosch)
            <br />
            Siemens Home Appliances
            <br />
            <a href="https://www.linkedin.com/in/gunjan-srivastava-2719b14/?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=sg">
              <img src={linkedin} alt="" className="in" />
            </a>
          </p>
        </div>
        <div>
          <h3>Executive Biography</h3>
          <p>
            An Alumini of IIT-BHU & IIMA, Gunjan brings over 28+ years of
            experience at work with Gillete, Philips,Sennheiser, & Bosch Siemens
            in Strategy, Consumer Marketing and MArket Development across Europe
            & Asia to his current role as the Chairman of the Region Asia
            Pacific Board of Bosch Siemeens Hoem Apliances Asis Pacific
            Business.
          </p>
        </div>
      </div>
      <div className="main">
        <div>
          <img src={sri} alt="" className="profile" />
          <p>
            Ram Gopal
            <br />
            Cheif Executive Officer
            <br />
            Barclays India
            <br />
            <a href="https://www.linkedin.com/in/ram-gopal-19944723/?originalSubdomain=in">
              <img src={linkedin} alt="" className="in" />
            </a>
          </p>
        </div>
        <div>
          <h3>Executive Biography</h3>
          <p>
            An MBA holder from teh University of Chicago & a CFA charter holder.
            Ram brings over 26+ years of experience gained at Citibank, Standar
            Chartered & currently Barclays over various geeographies & division
            to his current responsibilities of designing & executing country
            strategy for Barclays in India, with accountability for financial
            performance and market position for the bank. Additonally, Ram is
            also a meember of teh European Business Group Banking Finance
            Committee representing teh firms interests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
