import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a href="https://www.leaderclasses.com/about-us" target="_black">
          About
        </a>
      </div>
      <div className="bar"></div>
      <div>
        <a href="https://www.leaderclasses.com/faq" target="_black">
          FAQ
        </a>
      </div>
      <div className="bar"></div>
      <div>
        <a
          href="https://www.leaderclasses.com/leadership-and-career-development-programs"
          target="_black"
        >
          Leadership Programme
        </a>
      </div>
      <div className="bar"></div>
      <div>
        <a
          href="https://www.leaderclasses.com/budding-leaders-contest-foundation-program"
          target="_black"
        >
          Budding Leader Contest 2020
        </a>
      </div>
      <div className="bar"></div>
      <div>
        <a href="https://www.leaderclasses.com/careers" target="_black">
          Career
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
