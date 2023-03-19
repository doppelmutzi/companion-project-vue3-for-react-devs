import styled from "styled-components";
import { useContext } from "react";
import AppContext from "./AppContext";

const Container = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  > button {
    font-size: 24px;
    font-weight: bold;
    border: 0;
    background: none;
    color: ${(props) => (props.allChecked ? "inherit" : "#e6e6e6")};
    display: ${(props) => (props.visible ? "block" : "none")};
  }
`;

const ToggleButton = () => {
  const { todos, setTodos } = useContext(AppContext);
  const allChecked = todos.findIndex((todo) => !todo.checked) == -1;
  return (
    <Container visible={todos.length > 0} allChecked={allChecked}>
      <button
        onClick={() => {
          const updatedTodos = todos.map((todo) => ({
            ...todo,
            checked: !allChecked,
          }));
          setTodos([...updatedTodos]);
        }}
      >
        &or;
      </button>
    </Container>
  );
};

export default ToggleButton;
