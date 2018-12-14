import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListTitle = styled.h3``;

const STUB_TODOS = [
  {
    id: "asdlkasjda",
    text: "todo 2",
    completed: false
  },
  {
    id: "asdklaskdjas",
    text: "todo 12312",
    completed: false
  },
  {
    id: "asl123",
    text: "This todo is nice",
    completed: true
  }
];

const TodoList = () => (
  <div>
    <TodoListTitle>Todos</TodoListTitle>
    {STUB_TODOS.map(todo => (
      <TodoListItem key={todo.id} {...todo} />
    ))}
  </div>
);

export default TodoList;
