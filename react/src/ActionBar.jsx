import { useContext } from "react";
import styled from "styled-components";
import Status from "./Status";
import FilterButtons from "./FilterButtons";
import ClearButton from "./ClearButton";
import AppContext from "./AppContext";

const Wrapper = styled.div`
  background: white;
  padding: 0 16px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const DropShadow = styled.div`
  width: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 25px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;

const ActionBar = () => {
  const { todos, setTodos, theme } = useContext(AppContext);
  return (
    <>
      <Wrapper theme={theme}>
        <Status />
        <Center>
          <FilterButtons />
        </Center>
        {todos.filter((todo) => todo.checked).length > 0 && (
          <ClearButton
            onClick={() => {
              const uncheckedTodos = todos.filter((todo) => !todo.checked);
              setTodos([...uncheckedTodos]);
            }}
          />
        )}
      </Wrapper>
      <DropShadow />
    </>
  );
};

export default ActionBar;
