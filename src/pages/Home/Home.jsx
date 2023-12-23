import React from "react";
import ElementsLink from "./ElementsLink";
import ComponentsLink from "./ComponentsLink";

const Home = () => {
  return (
    <div className="p-10 flex flex-row gap-2">
      {/* Elements */}
      <div className="w-4/12">
        <h2 className="text-xl font-bold border-b mb-3 pb-1">Element List</h2>
        <div className="flex flex-col gap-1">
          <ElementsLink />
        </div>
      </div>
      {/* Components */}
      <div className="w-4/12">
        <h2 className="text-xl font-bold border-b mb-3 pb-1">Component List</h2>
        <div className="flex flex-col gap-1">
          <ComponentsLink />
        </div>
      </div>
    </div>
  );
};

export default Home;
