/* eslint-disable react-hooks/exhaustive-deps */
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { useToDo } from "../../Context/todo";

function AddTaskComponent() {
  const toast = useToast();
  const { dispatch } = useToDo();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ref.current?.value) return;
    dispatch({ type: "ADD_TASK", payload: { description: ref.current?.value } });
    toast({
      title: "Added Successfuly",
      position: "top",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    ref.current.value = "";
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <HStack mt="4" mb="4">
        <Input ref={ref} h="46" variant="filled" placeholder="Digite sua tarefa" />
        <Button colorScheme="blue" px="8" pl="10" pr="10" h="46" type="submit">
          Add new task
        </Button>
      </HStack>
    </form>
  );
}

export default AddTaskComponent;
