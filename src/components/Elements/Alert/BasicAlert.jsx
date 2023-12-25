import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const BasicAlert = () => {
  return (
    <div>
      <ComponentContainer
        title={"Basic Alert"}
        description={
          "The alert component is used to convey important information to the user through the use of contextual types, icons, and colors"
        }
      >
        <p className="text-base text-color-heading bg-default  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-white bg-primary  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-white bg-secondary  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-white bg-info  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-white bg-success  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-white bg-warning  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-white bg-error  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
      </ComponentContainer>
    </div>
  );
};

export default BasicAlert;
