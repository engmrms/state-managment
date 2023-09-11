import { ToDoProvider } from "../Context/todo";
import AddTaskComponent from "./Context/AddTaskComponent";
import TodoListComponent from "./Context/TodoListComponent";

const Context = () => {
  return (
    <ToDoProvider>
      <TodoListComponent />
      <AddTaskComponent />
    </ToDoProvider>
  );
};

export default Context;
