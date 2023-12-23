import { createBrowserRouter } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";
import MenuList from "../components/MenuList/MenuList";
import Dropdown from "../components/Dropdown/Dropdown";

export const reactRoute = createBrowserRouter([
  {
    path: "/",
    element: <Accordion />,
  },
  {
    path: "menu-list",
    element: <MenuList />,
  },
  {
    path:"dropdown",
    element: <Dropdown/>,

  },
]);
