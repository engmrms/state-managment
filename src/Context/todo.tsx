/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task, TaskAction, ToDo } from "../types";

const ToDoContext = createContext<ToDo>({} as ToDo);

export const ToDoProvider = ({ children }: { children: ReactNode }) => {
  const taskReducer = (state: Task[], action: TaskAction) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, { id: uuidv4(), ...action.payload, isCompleted: false }];
      case "UPDATE_TASK":
        return state.map(st => (st.id === action.payload.id ? action.payload : st));
      case "DELETE_TASK":
        return state.filter(st => st.id === action.payload);
      default:
        return state;
    }
  };
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return <ToDoContext.Provider value={{ tasks, dispatch }}>{children}</ToDoContext.Provider>;
};

export const useToDo = () => useContext(ToDoContext);
