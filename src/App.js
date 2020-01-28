import React, { Component } from "react";
import { HamburgerButton } from "react-hamburger-button";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ButtonGrid from "./components/ButtonGrid/ButtonGrid";
import Links from "./components/Links/Links";
import Test from "./components/Testimonials/Testimonials";

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
          <a href="https://www.leaderclasses.com/" className="baselink">
            <h2>LeaderClasses</h2>
          </a>
          <div className="ham-menu">
            <HamburgerButton
              open={this.state.open}
              onClick={this.handleClick}
              width={30}
              height={30}
              strokeWidth={5}
              color="darkolivegreen"
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
      </>
    );
  }
}

export default App;
