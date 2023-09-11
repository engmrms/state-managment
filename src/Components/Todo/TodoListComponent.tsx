import { StackDivider, VStack } from "@chakra-ui/react";

import { Task } from "../../types";
import TasksListComponent from "./TasksListComponent";

interface Props {
  tasks: Task[];
  onToggle: (task: Task) => void;
  onDelete: (id: string) => void;
}

function TodoListComponent({ tasks, onToggle, onDelete }: Props) {
  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="5"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch">
        {tasks?.map(task => (
          <TasksListComponent key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </VStack>
    </>
  );
}

export default TodoListComponent;
