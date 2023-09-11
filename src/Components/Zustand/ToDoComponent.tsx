import { shallow } from "zustand/shallow";
import useTodo from "../../Store/zustandStore";
import { Task } from "../../types";
import AddTaskComponent from "../Todo/AddTaskComponent";
import TodoListComponent from "../Todo/TodoListComponent";

function ToDoComponent() {
  const tasks = useTodo(state => state.tasks, shallow);
  const onAdd = useTodo(state => state.onAdd);
  const onUpdate = useTodo(state => state.onUpdate);
  const onDelete = useTodo(state => state.onDelete);

  const onAddTask = (description: string) => onAdd(description);
  const onToggleTask = (task: Task) => onUpdate({ ...task, isCompleted: !task.isCompleted });
  const onDeleteTask = (id: string) => onDelete(id);

  return (
    <>
      <TodoListComponent tasks={tasks} onDelete={onDeleteTask} onToggle={onToggleTask} />
      <AddTaskComponent onAdd={onAddTask} />
    </>
  );
}

export default ToDoComponent;
