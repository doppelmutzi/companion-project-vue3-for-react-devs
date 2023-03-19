import { useContext } from "react";
import AppContext from "./AppContext";

const Status = () => {
  const { todos } = useContext(AppContext);
  const todosLeft = todos.reduce((count, todo) => {
    if (!todo.checked) return count + 1;
    return count;
  }, 0);
  const label = todosLeft > 1 ? "items left" : "item left";
  return (
    <div>
      {todosLeft} {label}
    </div>
  );
};

export default Status;
