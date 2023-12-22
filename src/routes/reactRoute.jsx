import { createBrowserRouter } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";
import MenuList from "../components/MenuList/MenuList";

export const reactRoute = createBrowserRouter([
  {
    path: "/",
    element: <Accordion />,
  },
  {
    path: "menu-list",
    element: <MenuList />,
  },
]);
