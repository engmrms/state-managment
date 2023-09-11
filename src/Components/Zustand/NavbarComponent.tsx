import { Badge, Stack } from "@chakra-ui/react";
import useTodo from "../../Store/zustandStore";

function NavbarComponent() {
  const tasks = useTodo(store => store.tasks);
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
