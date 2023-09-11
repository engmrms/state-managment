import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { Task } from "../../types";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
}

function DeleteTask({ task, onDelete }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDeleteTask = (id: string) => {
    onDelete(id);
    onClose();
  };

  console.log("DeleteTaskComponent render");
  return (
    <>
      <DeleteIcon boxSize={4} onClick={onOpen} color="red.500" cursor={"pointer"} />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Are you sure you want to delete ?</ModalHeader>
          <ModalBody>
            <Text>{task.description}</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="blue" onClick={() => onDeleteTask(task.id)}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteTask;
