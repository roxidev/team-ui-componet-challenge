import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const SoftAlert = () => {
  return (
    <div className="h-full">
      <ComponentContainer
        title={"Soft Alert"}
        description={
          "Alerts can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
        }
      >
        <p className="text-base text-primary  bg-primary-soft  py-4 px-5 rounded-full">
          This is simple alert
        </p>
        <p className="text-base text-secondary  bg-secondary-soft  py-4 px-5 rounded-full">
          This is simple alert
        </p>
        <p className="text-base text-info  bg-info-soft  py-4 px-5 rounded-full">
          This is simple alert
        </p>
        <p className="text-base text-success  bg-success-soft  py-4 px-5 rounded-full">
          This is simple alert
        </p>
        <p className="text-base text-warning  bg-warning-soft  py-4 px-5 rounded-full">
          This is simple alert
        </p>
        <p className="text-base text-error  bg-error-soft  py-4 px-5 rounded-full">
          This is simple alert
        </p>
      </ComponentContainer>
    </div>
  );
};

export default SoftAlert;
