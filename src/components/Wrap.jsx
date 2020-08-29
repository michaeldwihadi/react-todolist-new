import React from "react";
import PropTypes from "prop-types";

const Wrap = ({ children }) => {
  return <div className="container">{children}</div>;
};

Wrap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default Wrap;
