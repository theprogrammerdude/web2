import React, { Component } from "react";
import { HamburgerButton } from "react-hamburger-button";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ButtonGrid from "./components/ButtonGrid/ButtonGrid";
import Links from "./components/Links/Links";
import Test from "./components/Testimonials/Testimonials";

import insta from "./assets/insta.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: "",
      navToggle: ""
    };
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
      navToggle: !this.state.navToggle
    });
  };

  render() {
    const navToggle = this.state.navToggle;
    return (
      <>
        <div className="nav-container">
          <a
            href="https://www.leaderclasses.com/"
            target="_black"
            className="baselink"
          >
            <h1>LeaderClasses</h1>
          </a>
          <div className="ham-menu">
            <HamburgerButton
              open={this.state.open}
              onClick={this.handleClick}
              width={30}
              height={30}
              strokeWidth={5}
              color="indianred"
              animationDuration={0.5}
            />
          </div>
        </div>
        {navToggle ? <Navbar /> : null}
        <div>
          <p className="desc">
            Leader Classes harnesses teh world's best Career Advancements &
            Leadership Development resources, helping you gain Expert Knowledge,
            Practical Guidance and Actinable Insights from extraordinary Leaders
            & World Class Institutions trough Specialized, Affordable, Online
            and Offline Programs custom crafted to Accelerate your Career &
            Business Success while transforming you into a better & more
            effective Leader.
          </p>
        </div>
        <div className="desc1">
          <h4>To facilitate this, Leader Classes :-</h4>
          <p>
            Relentlessly tracks and learns from 100+ Fulltime/Executive
            Development Programs at <b>Pre-Eminent Universities</b> like
          </p>
        </div>
        <div>
          <ButtonGrid />
        </div>
        <div className="desc2">
          <h5>High Impact Offline Events</h5>
          <p>
            Members are also invited to Specialized, High Impact, One-Day Career
            Advancement and Strategic Transformation (CAST) Workshops held
            Offline at select Cities & Countries for an Immersive Learning and
            Networking experience enabling them to :-
          </p>
          <div>
            <ol>
              <li>
                Broaden & Deepen their Leadership Foundations while learning
                first hand with us.
              </li>
              <li>
                Efficiently Network & BUild Relationships with their finest
                peers.
              </li>
            </ol>
          </div>
          <div>
            <p>
              These High Impact, One Day, Offline CAST events are aligned to the
              Strategic Career Management & Leadership Development needs at Four
              Stages of Our Member's Life :-
            </p>
          </div>
        </div>
        <Links />
        <Test />
        <h2>Campus Partners</h2>
        <p className="end-p">
          Representing an Institution? <br />
          LeaderClasses is in a very interesting phase of its growth & is
          actively looking to expand our Campus Partnerships Pan-India.
          <br />
          If your are an Institutional Representative of a University/College
          interested in building a relationship with us, we invite you to review
          our{" "}
          <a
            href="https://www.leaderclasses.com/campus-partners"
            target="_black"
          >
            "Campus Partners
          </a>{" "}
          page & Submit your details via our Campus Partners page. <br />
          We look forward to hear from you soon and will advice interest/next
          step within 5 Business Days of receival of your{" "}
          <a
            href="https://www.leaderclasses.com/campus-partners-form"
            target="_black"
          >
            "Campus Partners Form"
          </a>{" "}
          <br />
          Thanks for your Time & Attention ! <br />
          Team - LeaderClasses
        </p>
        <div className="end-div">
          <a
            href="https://www.leaderclasses.com/leaderclasses-contact-form"
            id="contact"
            target="_black"
          >
            Contact Us
          </a>
        </div>
        <footer>
          <div className="footer-sm">
            <p>Share via -</p>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FLeaderClasses-105817960762777%2F%3Fmodal%3Dadmin_todo_tour&amp%3Bsrc=sdkpreparse&ext=1580320866&hash=AeYJHJCHE8Jsz6kA"
              target="_black"
            >
              <img src={insta} />
            </a>
            <a
              href="https://www.linkedin.com/shareArticle/?mini=true&url=linkedin.com/company/leaderclasses&title=&summary=&source="
              target="_black"
            >
              <img src={linkedin} />
            </a>
            <a
              href="https://twitter.com/home?status=https%3A//twitter.com/leaderclasses"
              target="_black"
            >
              <img src={twitter} />
            </a>
          </div>
          <div className="footer-sm">
            <p>Follow Us -</p>
            <a
              href="https://www.instagram.com/leaderclassesofficial/"
              target="_black"
            >
              <img src={insta} />
            </a>
            <a
              href="https://www.linkedin.com/company/leaderclasses/about/"
              target="_black"
            >
              <img src={linkedin} />
            </a>
            <a href="https://twitter.com/leaderclasses" target="_black">
              <img src={twitter} />
            </a>
          </div>
          <div className="links">
            <a href="https://www.leaderclasses.com/contact" target="_black">
              Contact
            </a>
            <a
              href="https://www.leaderclasses.com/terms-and-conditions"
              target="_black"
            >
              Terms
            </a>
            <a href="https://www.leaderclasses.com/privacy" target="_black">
              Privacy
            </a>
          </div>
        </footer>
        <p className="cp">Re-designed by TheProgrammerDude</p>
      </>
    );
  }
}

export default App;
