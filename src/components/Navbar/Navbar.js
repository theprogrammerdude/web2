import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a href="https://www.leaderclasses.com/about-us">About</a>
      </div>
      <div className="bar"></div>
      <div>
        <a href="https://www.leaderclasses.com/faq">FAQ</a>
      </div>
      <div className="bar"></div>
      <div>
        <a href="https://www.leaderclasses.com/leadership-and-career-development-programs">
          Leadership Programme
        </a>
      </div>
      <div className="bar"></div>
      <div>
        <a href="https://www.leaderclasses.com/budding-leaders-contest-foundation-program">
          Budding Leader Contest 2020
        </a>
      </div>
      <div className="bar"></div>
      <div>
        <a href="https://www.leaderclasses.com/careers">Career</a>
      </div>
    </nav>
  );
};

export default Navbar;
