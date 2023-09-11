import { HStack, Text } from "@chakra-ui/react";
import { Task } from "../../types";
import DeleteTask from "./DeleteTaskComponent";

interface Props {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: string) => void;
}

function TasksListComponent({ task, onToggle, onDelete }: Props) {
  console.log("TasksListComponent render");
  return (
    <>
      <HStack key={task.id} _hover={{ "&>div": { opacity: 1 } }}>
        <Text
          w="100%"
          p="8px"
          opacity={task.isCompleted == true ? "0.2" : "1"}
          borderRadius="lg"
          // as={task.isCompleted == true ? "s" : ""}
          cursor="pointer"
          onClick={() => onToggle(task)}>
          {task.description}
        </Text>
        <HStack opacity={0} transition={"ease-in-out"} transitionDuration={".2s"}>
          <DeleteTask task={task} onDelete={onDelete} />
        </HStack>
        {/* <UpdateTask task={task} updateTask={updateTask} /> */}
      </HStack>
    </>
  );
}

export default TasksListComponent;
