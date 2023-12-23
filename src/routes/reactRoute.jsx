import { createBrowserRouter } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";
import MenuList from "../components/MenuList/MenuList";
import Table from "../components/Table/Table";
import Pagination from "../components/Pagination/Pagination";

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
    path: "table",
    element: <Table />,
  },
  {
    path: "/pagination",
    element: <Pagination />,
  },
]);
