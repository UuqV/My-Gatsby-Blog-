import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Cards from "../components/cards";

import header from "../styles/header.module.scss";
require("../styles/header.module.scss");

const headerbox = ({siteTitle, indexLayout}) =>(
<div className={indexLayout ? header.indexMainTitleBox : ""}>
<div className={indexLayout ? header.indexTitle : header.title}>
  <h2 className={indexLayout ? header.indexTitleText : " "}>
    {console.log(indexLayout)}
    <Link to="/" className="white">
      {siteTitle}
    </Link>
  </h2>
</div>
<div
  className={indexLayout ? header.indexSubheading : header.subheading}
>
  {indexLayout ? (
    <h3 style={{ color: "white" }}>
      Thoughts of an aspiring Web developer
    </h3>
  ) : (
    <h3 style={{ color: "white", fontSize: "1.4rem" }}>
      Web Dev Blog <br />
      For the Future
    </h3>
  )}
</div>
</div>);

const menubox = ({indexLayout}) => (
<div className={indexLayout ? header.indexMenubox : header.menubox}>
<div className={header.menubox__item}>
{console.log(indexLayout)}
  <h3>
    <Link to="/articles" className="white">
      Blog
    </Link>
  </h3>
</div>
<div className={header.menubox__item}>
  <h3>
    <Link to="/about" className="white">
      About
    </Link>
  </h3>
</div>
</div>);

const noindexheader = [headerbox, menubox];

const Header = ({ siteTitle, indexLayout, props }) => (
  <header className={indexLayout ? header.indexSidebar : header.sidebar}>
    <div id={header.angle} />
    {indexLayout ?
     <div className={header.indexTopBox}>
        {headerbox({siteTitle, indexLayout})}
        {menubox({indexLayout})}
      </div>
      :
        <>
        {headerbox({siteTitle, indexLayout})}
        {menubox({indexLayout})}
        </>
    }
    {
      indexLayout ? 
    (<div className={header.indexBottomBox}>
      <Cards props={props}/>
    </div>)
    : null
    }
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
