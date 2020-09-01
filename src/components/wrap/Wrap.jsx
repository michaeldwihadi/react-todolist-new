/** @jsx jsx */
//import React from "react"
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";

import * as styles from "./wrap.styles";
const Wrap = ({ children }) => {
  return <div css={styles.container}>{children}</div>;
};

Wrap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default Wrap;
