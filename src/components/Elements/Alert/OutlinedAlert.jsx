import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const OutlinedAlert = () => {
  return (
    <div className="h-full">
      <ComponentContainer
        title={"Outlined Alert"}
        description={
          "Alerts can be outlied. Check out code for detail of usage."
        }
      >
        <p className="text-base text-color-heading border-2 border-default  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-primary border-2 border-primary  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-secondary border-2 border-secondary  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-info border-2 border-info  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-success border-2 border-success  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-warning border-2 border-warning  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-error border-2 border-error  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
      </ComponentContainer>
    </div>
  );
};

export default OutlinedAlert;
