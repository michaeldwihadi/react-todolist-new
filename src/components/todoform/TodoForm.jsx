/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import React, { useState } from "react";
import PropTypes from "prop-types";

import * as styles from "./todoform.styles";

const TodoForm = ({ addItem }) => {
  const theme = useTheme();

  const [value, setValue] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Please Fill In !");
      return;
    }

    if (value.length > 45) {
      alert("Please create a shorter to do item text !");
      setValue("");
      return;
    }

    addItem(value);
    setValue("");
  };

  return (
    <div css={styles.todoForm}>
      <form action="" onSubmit={formSubmitHandler}>
        <input
          type="text"
          css={styles.inputForm}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button css={styles.submitButton({ theme })}>Add</button>
      </form>
    </div>
  );
};

TodoForm.PropTypes = {
  addItem: PropTypes.func.isRequired
};

export default TodoForm;
