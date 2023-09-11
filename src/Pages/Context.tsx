import ToDoComponent from "../Components/Context/ToDoComponent";
import { ToDoProvider } from "../Context/todo";

const Context = () => {
  return (
    <ToDoProvider>
      <ToDoComponent />
    </ToDoProvider>
  );
};

export default Context;
