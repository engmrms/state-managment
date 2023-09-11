import { Dispatch } from "react";

export type Task = {
  id: string;
  description: string;
  isCompleted?: boolean;
};

export interface ToDo {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

type ADDTASK = {
  type: "ADD_TASK";
  payload: { description: string };
};
type UPDATETASK = {
  type: "UPDATE_TASK";
  payload: Task;
};
type DELETETASK = {
  type: "DELETE_TASK";
  payload: string;
};
export type TaskAction = ADDTASK | UPDATETASK | DELETETASK;
