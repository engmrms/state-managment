import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from "uuid";
import { Task } from "../types";
const initialState: Task[] = [];

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => state.concat({ id: uuidV4(), description: payload, isCompleted: false }),
    deleteTodo: (state, action) => state.filter(task => task.id !== action.payload),
    updateTodo: (state, action) => state.map(task => (task.id === action.payload.id ? action.payload : task)),
  },
});

export const { addTodo, deleteTodo, updateTodo } = toDoSlice.actions;
export default toDoSlice;
