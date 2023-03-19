import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AppContext from "./AppContext";

const Container = styled.div``;

const TodoList = () => {
  const { todos, filterIndex } = useContext(AppContext);
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    if (filterIndex === 0) {
      setFilteredTodos([...todos]);
    } else if (filterIndex === 1) {
      setFilteredTodos([...todos.filter((todo) => !todo.checked)]);
    } else {
      setFilteredTodos([...todos.filter((todo) => todo.checked)]);
    }
  }, [filterIndex, todos]);
  return (
    <Container>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};

export default TodoList;
