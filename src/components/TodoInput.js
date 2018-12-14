import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input``;

const TodoInput = () => {
  const [active, setActive] = useState(false);

  return active ? (
    <Input />
  ) : (
    <span onClick={() => setActive(true)}>+ Add task</span>
  );
};

export default TodoInput;
