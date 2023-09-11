import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import NavbarComponent from "../Components/Redux/NavbarComponent";
import ToDoComponent from "../Components/Redux/ToDoComponent";
import toDoSlice from "../Store/reduxStore";

const store = configureStore({
  reducer: {
    ToDo: toDoSlice.reducer,
  },
});

const Redux = () => {
  return (
    <Provider store={store}>
      <NavbarComponent />
      <ToDoComponent />
    </Provider>
  );
};

export default Redux;
