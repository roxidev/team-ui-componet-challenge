import { createBrowserRouter } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";
import MenuList from "../components/MenuList/MenuList";
import Navbar from "../Home/Navbar/Navbar";

export const reactRoute = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
  {
    path: "menu-list",
    element: <MenuList />,
  },
]);
