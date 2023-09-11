import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { Task } from "../types";
interface Store {
  tasks: Task[];
  onDelete: (id: string) => void;
  onAdd: (description: string) => void;
  onUpdate: (task: Task) => void;
}

const useTodo = create<Store>(set => ({
  tasks: [],
  onAdd: description => set(store => ({ tasks: [...store.tasks, { id: uuidv4(), description, isCompleted: false }] })),
  onUpdate: task => set(({ tasks }) => ({ tasks: tasks.map(st => (st.id === task.id ? task : st)) })),
  onDelete: id => set(({ tasks }) => ({ tasks: tasks.filter(ts => ts.id !== id) })),
}));

export default useTodo;
