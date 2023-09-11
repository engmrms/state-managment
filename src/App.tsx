import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import router from "./router";
function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
