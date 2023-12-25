import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Avatar from "../components/Elements/Avatar/Avatar";
import Alert from "../components/Elements/Alert/Alert";
import Badge from "../components/Elements/Badge/Badge";
import Breadcrumb from "../components/Elements/Breadcrumb/Breadcrumb";
import Button from "../components/Elements/Button/Button";
import ButtonGroup from "../components/Elements/ButtonGroup/ButtonGroup";
import Card from "../components/Elements/Card/Card";
import Divider from "../components/Elements/Divider/Divider";
import Forms from "../components/Elements/Forms/Forms";
import Mask from "../components/Elements/Mask/Mask";
import Progress from "../components/Elements/Progress/Progress";
import Skeleton from "../components/Elements/Skeleton/Skeleton";
import Spinner from "../components/Elements/Spinner/Spinner";
import Tag from "../components/Elements/Tag/Tag";
import Typography from "../components/Elements/Typography/Typography";
import Elements from "../pages/Elements/Elements";
import Components from "../pages/Components/Components";
import Accordion from "../components/Accordion/Accordion";
import Dropdown from "../components/Dropdown/Dropdown";
import Pagination from "../components/Pagination/Pagination";
import MenuList from "../components/MenuList/MenuList";
import Tooltip from "../components/Elements/Tooltip/Tooltip";
import Collapse from "../components/Collapse/Collapse";
import Tab from "../components/Tab/Tab";
import Popover from "../components/Popover/Popover";
import Modal from "../components/Modal/Modal";
import Drawer from "../components/Drawer/Drawer";
import Steps from "../components/Steps/Steps";
import Timeline from "../components/Timeline/Timeline";

export const reactRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/elements",
    element: <Elements />,
    children: [
      {
        path: "avatar",
        element: <Avatar />,
      },
      {
        path: "alert",
        element: <Alert />,
      },
      {
        path: "badge",
        element: <Badge />,
      },
      {
        path: "breadcrumb",
        element: <Breadcrumb />,
      },
      {
        path: "button",
        element: <Button />,
      },
      {
        path: "button-group",
        element: <ButtonGroup />,
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "divider",
        element: <Divider />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "mask",
        element: <Mask />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "skeleton",
        element: <Skeleton />,
      },
      {
        path: "spinner",
        element: <Spinner />,
      },
      {
        path: "tag",
        element: <Tag />,
      },
      {
        path: "tooltip",
        element: <Tooltip />,
      },
      {
        path: "typography",
        element: <Typography />,
      },
    ],
  },
  {
    path: "components",
    element: <Components />,
    children: [
      {
        path: "accordion",
        element: <Accordion />,
      },
      {
        path: "Collapse",
        element: <Collapse />,
      },
      {
        path: "Tab",
        element: <Tab />,
      },
      {
        path: "Dropdown",
        element: <Dropdown />,
      },
      {
        path: "Popover",
        element: <Popover />,
      },
      {
        path: "Modal",
        element: <Modal />,
      },
      {
        path: "Drawer",
        element: <Drawer />,
      },
      {
        path: "Steps",
        element: <Steps />,
      },
      {
        path: "Timeline",
        element: <Timeline />,
      },
      {
        path: "menu-list",
        element: <MenuList />,
      },
      {
        path: "treeview",
        element: <Accordion />,
      },
      {
        path: "table",
        element: <Accordion />,
      },
      {
        path: "table-advanced",
        element: <Accordion />,
      },
      {
        path: "apexcharts",
        element: <Accordion />,
      },
      {
        path: "carousel",
        element: <Accordion />,
      },
      {
        path: "notification",
        element: <Accordion />,
      },
      {
        path: "clipboard",
        element: <Accordion />,
      },
      {
        path: "persist",
        element: <Accordion />,
      },
      {
        path: "monochrome-mode",
        element: <Accordion />,
      },
    ],
  },
]);
