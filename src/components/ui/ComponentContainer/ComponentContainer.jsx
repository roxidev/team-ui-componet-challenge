import React from "react";
import ComponentPera from "../ComponentPera/ComponentPera";
import ComponentTitle from "../ComponentTitle/ComponentTitle";

const ComponentContainer = ({ title, description, children }) => {
  return (
    <div className="bg-white drop-shadow-2xl  rounded-xl shadow-slate-50 p-5 flex flex-col gap-3">
      <ComponentTitle>{title}</ComponentTitle>
      <ComponentPera>{description}</ComponentPera>
      {children}
    </div>
  );
};

export default ComponentContainer;
