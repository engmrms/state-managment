import { Badge, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Task } from "../../types";

function NavbarComponent() {
  const tasks = useSelector((state: { ToDo: Task[] }) => state?.ToDo);
  console.log("NavbarComponent Render");
  return (
    <Stack direction="row" mb={3} pr={"3"} justifyContent={"end"}>
      <Badge colorScheme="green" rounded={4} display={"flex"} justifyContent={"center"} alignItems={"center"} fontSize={16} boxSize={8}>
        {tasks?.length}
      </Badge>
    </Stack>
  );
}

export default NavbarComponent;
