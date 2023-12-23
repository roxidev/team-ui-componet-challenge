import React from "react";

const ComponentTitle = ({ children }) => {
  return (
    <h3 className="text-color-heading font-bold lg:text-lg leading-normal">
      {children}
    </h3>
  );
};

export default ComponentTitle;
