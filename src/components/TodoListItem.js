import React from "react";
import styled from "styled-components";

import TodoListItemCheckbox from "./TodoListItemCheckbox";

const Container = styled.div`
  padding: 14px 0;
  border-bottom: black 1px solid;
`;

const Text = styled.span`
  vertical-align: super;
  font-size: 1.1rem;
  margin-left: 7px;
`;

const TodoListItem = ({ text, completed }) => (
  <Container>
    <TodoListItemCheckbox checked={completed} />
    <Text style={{ textDecoration: completed && "line-through" }}>{text}</Text>
  </Container>
);

export default TodoListItem;
