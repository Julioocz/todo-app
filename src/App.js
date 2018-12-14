import React, { Component } from "react";
import styled from "styled-components";
import "normalize.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const Outer = styled.div`
  background-color: white;
  height: 100vh;
  padding-top: 5vh;
`;

const AppContainer = styled.div`
  width: 50vw;
  margin: auto;
  height: 95vh;
  border-radius: 10px;
  padding: 2%;
`;

class App extends Component {
  render() {
    return (
      <Outer>
        <AppContainer>
          <TodoList />
          <TodoInput />
        </AppContainer>
      </Outer>
    );
  }
}

export default App;
