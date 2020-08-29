import React, { useState } from "react";

import Wrap from "../components/Wrap";
import TodoForm from "../components/TodoForm";
import TodoWrap from "../components/TodoWrap";
import Todo from "../components/Todo";
import Title from "../components/Title";
import ItemList from "../components/ItemList";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Task 1" },
    { text: "Task 2" },
    { text: "Task 3" }
  ]);

  const addItem = (value) => {
    const addedItem = [...todos, { text: value, isCompleted: false }];

    setTodos(addedItem);
  };

  return (
    <Wrap>
      <TodoForm addItem={addItem} />
      <TodoWrap>
        <Title />
        <Todo todos={todos}>
          <ItemList />
        </Todo>
      </TodoWrap>
    </Wrap>
  );
};

export default TodoList;
