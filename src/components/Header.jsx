import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
function Header(props) {
  const headerStyle = {
    backgroundColor: props.bgcolor,
    color: props.textcolor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        {/* <Link to="/"> */}
        <h1>{props.text}</h1>
        {/* </Link> */}
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgcolor: "rgba(0,0,0,0.4)",
  textcolor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Header;
