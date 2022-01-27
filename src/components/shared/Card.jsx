import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

Card.defaultProps = {
  reverse: false,
};

Card.protoTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
export default Card;
