import { Box, ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import router from "./router";
function App() {
  return (
    <ChakraProvider>
      <Navbar />

      <Box p={4} maxW={600} marginX={"auto"} mt={50}>
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
