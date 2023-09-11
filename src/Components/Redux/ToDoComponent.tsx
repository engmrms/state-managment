import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../../Store/reduxStore";
import { Task } from "../../types";
import AddTaskComponent from "../Todo/AddTaskComponent";
import TodoListComponent from "../Todo/TodoListComponent";

function ToDoComponent() {
  const tasks = useSelector((state: { ToDo: Task[] }) => state?.ToDo, shallowEqual);

  const dispatch = useDispatch();

  const deleteTask = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const toggleTask = (task: Task) => {
    dispatch(updateTodo({ ...task, isCompleted: !task.isCompleted }));
  };
  const addTask = (description: string) => {
    dispatch(addTodo(description));
  };

  return (
    <>
      <TodoListComponent tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      <AddTaskComponent onAdd={addTask} />
    </>
  );
}

export default ToDoComponent;
