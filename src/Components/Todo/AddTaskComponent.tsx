/* eslint-disable react-hooks/exhaustive-deps */
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useRef, useState } from "react";
interface Props {
  onAdd: (description: string) => void;
}

function AddTaskComponent({ onAdd }: Props) {
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(true);
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!ref.current?.value) return;
    onAdd(ref.current.value);
    toast({
      title: "Added Successfuly",
      position: "top",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    ref.current.value = "";
    setIsDisabled(true);
  };
  console.log("AddTaskComponent render");
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <HStack mt="4" mb="4">
        <Input
          ref={ref}
          h="46"
          variant="outline"
          placeholder="New Task"
          onChange={e => {
            setIsDisabled(!e.target.value);
          }}
        />
        <Button colorScheme="blue" px="8" pl="10" pr="10" h="46" type="submit" isDisabled={isDisabled}>
          Add new task
        </Button>
      </HStack>
    </form>
  );
}

export default AddTaskComponent;
