import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/home",
    element: <Home />,
  },
]);



