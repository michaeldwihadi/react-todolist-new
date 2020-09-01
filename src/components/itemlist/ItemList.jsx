/** @jsx jsx */
//import React from "react"
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

import * as styles from "./itemlist.styles";

const Todo = ({ text, index }) => {
  const theme = useTheme();
  return (
    <div css={styles.todo}>
      <span css={styles.todoSpan}>{text}</span>
      <button css={styles.deleteButton({ theme })}>Delete</button>
      <button css={styles.editButton({ theme })}>Done</button>
    </div>
    // <div css="todo">
    //   <span css="todoSpan">{text}</span>
    //   <button css="deleteButton">Delete</button>
    //   <button css="editButton">Done</button>
    // </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Todo;
