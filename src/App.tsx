import { RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import router from "./router";

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
