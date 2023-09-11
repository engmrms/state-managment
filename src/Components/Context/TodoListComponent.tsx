import { StackDivider, VStack } from "@chakra-ui/react";
import { useToDo } from "../../Context/todo";
import TasksListComponent from "./TasksListComponent";
function TodoListComponent() {
  const { tasks } = useToDo();
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
        {tasks.map(task => (
          <TasksListComponent task={task} />
        ))}
      </VStack>
    </>
  );
}

export default TodoListComponent;