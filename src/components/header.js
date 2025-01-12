import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Scroll from "../components/smoothscroll";
import Typist from "react-typist";
import header from "../styles/header.module.scss";
require("../styles/header.module.scss");

function randomQuote() {
  let Quotes = [
    "Web Developer",
    "Now if only I could scent it, it would really give that something extra.",
    "'Alexa, tell me my daily 2 Chainz quote.'",
    "I got optional dependencies to work once in poetry."
  ];
  let i = Math.floor(Math.random() * Quotes.length);
  return Quotes[i];
}

const headerbox = ({ siteTitle, indexLayout }) => (
  <div className={indexLayout ? header.indexMainTitleBox : ""}>
    <div className={indexLayout ? header.indexTitle : header.title}>
      <h1 className={indexLayout ? header.indexTitleText : " "}>
        <Link to="/" className="white">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className={indexLayout ? header.indexSubheading : header.subheading}>
      {indexLayout ? (
        <h3 style={{ color: "white", fontSize: "2em", fontFamily: "Playfair" }}>
          <Typist avgTypingSpeed={1}>{randomQuote()}</Typist>
        </h3>
      ) : (
        <h3 style={{ color: "white", fontSize: "1rem" }}>
          <Typist style={{ fontFamily: "Playfair" }}>
            Web Dev Blog <br />
            For the Future!
          </Typist>
        </h3>
      )}
    </div>
  </div>
);

const menubox = ({ indexLayout }) => (
  <div className={indexLayout ? header.indexMenubox : header.menubox}>
    <div className={header.menubox__item}>
      <Link to="/projects-page" className="white">
        <h3>Projects</h3>
      </Link>
    </div>
    <div className={header.menubox__item}>
      <Link to="/about" className="white">
        <h3>About</h3>
      </Link>
    </div>
  </div>
);

const Header = ({ siteTitle, indexLayout, props }) => (
  <header className={header.indexSidebar}>
    <div id={header.angle} />
    <div className={header.indexTopBox}>
      <div className={header.gobo} />
      {menubox({ indexLayout })}
    </div>
    {headerbox({ siteTitle, indexLayout })}
    <div style={{ position: "absolute", top: "80vh", left: "50vw" }}>
      <Scroll to="bio" />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
