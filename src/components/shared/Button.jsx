import React from "react";
import PropTypes from "prop-types";

function Button({ children, type, isDisabled, version }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  isDisabled: false,
  version: "primary",
};
Button.propTypes = {
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Button;
