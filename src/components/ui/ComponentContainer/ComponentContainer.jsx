import React from "react";
import ComponentPera from "../ComponentPera/ComponentPera";
import ComponentTitle from "../ComponentTitle/ComponentTitle";

const ComponentContainer = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-md p-5 flex flex-col gap-3">
      <ComponentTitle>{title}</ComponentTitle>
      <ComponentPera>{description}</ComponentPera>
      {children}
    </div>
  );
};

export default ComponentContainer;
