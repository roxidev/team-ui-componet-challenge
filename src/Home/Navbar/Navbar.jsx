import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbar = [
    {
      id: "menu",
      name: "Menu",
      pathName: "/menu-list",
    },
    {
      id: "Dashboard",
      name: "DashBoard",
      pathName: "/",
    },
  ];
  return <div>
    <nav className="flex justify-center items-center space-x-4 my-8">
        {
            navbar.map(item=>(<div>
                <NavLink to={item.pathName
                } className=' bg-purple-600 p-2 rounded text-white'> {item.name}</NavLink>
            </div>))
        }
    </nav>
  </div>;
};

export default Navbar;
