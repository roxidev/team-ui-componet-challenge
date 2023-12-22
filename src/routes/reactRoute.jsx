import { createBrowserRouter } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";

export const reactRoute = createBrowserRouter([
  {
    path: "/",
    element: <Accordion />,
  },
]);
