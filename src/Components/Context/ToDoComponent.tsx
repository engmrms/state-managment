import { useToDo } from "../../Context/todo";
import { Task } from "../../types";
import AddTaskComponent from "../Todo/AddTaskComponent";
import TodoListComponent from "../Todo/TodoListComponent";

function ToDoComponent() {
  const { tasks, dispatch } = useToDo();

  const deleteTask = (id: string) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const toggleTask = (task: Task) => {
    dispatch({ type: "UPDATE_TASK", payload: { ...task, isCompleted: !task.isCompleted } });
  };
  const addTask = (description: string) => {
    dispatch({ type: "ADD_TASK", payload: { description } });
  };

  return (
    <>
      <TodoListComponent tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      <AddTaskComponent onAdd={addTask} />
    </>
  );
}

export default ToDoComponent;
