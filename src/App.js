import React from "react";
import "./styles.css";
import { ThemeProvider } from "emotion-theming";

import TodoList from "./pages/Todolist";

const theme = {
  color: {
    primary: {
      red: "#ff564e",
      green: "#31cf54",
      blue: "#1890ff"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
