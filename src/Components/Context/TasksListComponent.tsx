import { HStack, Text } from "@chakra-ui/react";
import { useToDo } from "../../Context/todo";
import { Task } from "../../types";

function TasksListComponent({ task }: { task: Task }) {
  const { dispatch } = useToDo();
  const toggleTask = (task: Task) => {
    dispatch({ type: "UPDATE_TASK", payload: { ...task, isCompleted: !task.isCompleted } });
  };
  return (
    <>
      <HStack key={task.id} opacity={task.isCompleted == true ? "0.2" : "1"}>
        <Text w="100%" p="8px" borderRadius="lg" as={task.isCompleted == true ? "s" : ""} cursor="pointer" onClick={() => toggleTask(task)}>
          {task.description}
        </Text>
        {/* <DeleteTask task={task} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} />
        <UpdateTask task={task} updateTask={updateTask} /> */}
      </HStack>
    </>
  );
}

export default TasksListComponent;
