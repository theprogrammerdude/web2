import React from "react";
import "./Testimonials.css";

import rgv from "../../assets/rgv.jpg";
import sri from "../../assets/sri.jpeg";
import nitin from "../../assets/nitin.jpg";
import setia from "../../assets/setia.jpeg";
import linkedin from "../../assets/linkedin.png";

function Testimonials() {
  return (
    <div className="contaimer1">
      <h2>CEO Testimonials</h2>
      <hr></hr>
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
            <a
              href="https://www.linkedin.com/in/gunjan-srivastava-2719b14/?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=sg"
              target="_black"
            >
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
      <hr></hr>
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
            <a
              href="https://www.linkedin.com/in/ram-gopal-19944723/?originalSubdomain=in"
              target="_black"
            >
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
      <hr></hr>
      <h2>Emerging CEO Testamonials</h2>
      <div className="main">
        <div>
          <img src={setia} alt="" className="profile" />
          <p>
            Anchit Setia
            <br />
            Vice President Marketing at Myntra
            <br />
            <a
              href="https://www.linkedin.com/in/achintsetia?originalSubdomain=in"
              target="_black"
            >
              <img src={linkedin} alt="" className="in" />
            </a>
          </p>
        </div>
        <div>
          <h3>Executive Biography</h3>
          <p>
            An ISB Alumini is an Inddustry Fast Tracker from the TMT Sector,
            bringing his experience at Microsoft, MsKinsley & Viacom across
            Development, Strategy, Corporate Development, Innovation and Market
            Development to his current role of building Myntra levereging his
            Digital Strategy & Execution expertise
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="main">
        <div>
          <img src={nitin} alt="" className="profile" />
          <p>
            Nitin Kocchar
            <br />
            COO @ Hero Electronix
            <br />
            <a
              href="https://www.linkedin.com/in/nitin-kochhar-4672401?originalSubdomain=in"
              target="_black"
            >
              <img src={linkedin} alt="" className="in" />
            </a>
          </p>
        </div>
        <div>
          <h3>Executive Biography</h3>
          <p>
            An IIFT Alumini, Nitin is an Industry Fast Tracker from teh
            E-Commerce & FMCG sectors, bringing his experience in Corporate
            Fimance, Marketing, Category Management & Market Developmentat
            Flipkart, Shopclues and Rivigo to his current role of heading the
            Consumer IOT business of Hero Electronix planned for 2019 launch
          </p>
        </div>
      </div>
      <hr></hr>
      <p className="last-p">
        Know More & Apply for our{" "}
        <a
          href="https://www.leaderclasses.com/leadership-and-career-development-programs"
          target="_black"
        >
          "Leadership Development and Career Acceleration Programs"
        </a>
      </p>
    </div>
  );
}

export default Testimonials;
