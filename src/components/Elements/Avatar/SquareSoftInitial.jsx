import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const SquareSoftInitial = () => {
  return (
    <ComponentContainer
      title={"Square Soft Initial"}
      description={
        "Initial avatars can have a soft colors and square shape. To do this, you should use some opacity and border-radius utility. Check out code for detail of usage."
      }
    >
      <div className="flex flex-row gap-4 items-baseline">
        <span className="bg-default text-color-heading rounded-lg  py-3 px-4">
          JD
        </span>
        <span className="bg-primary-soft text-primary rounded-lg  py-3 px-4">
          JD
        </span>
        <span className="bg-secondary-soft text-secondary rounded-lg  py-3 px-4">
          JD
        </span>
        <span className="bg-info-soft text-info rounded-lg  py-3 px-4">JD</span>
        <span className="bg-success-soft text-success rounded-lg  py-3 px-4">
          JD
        </span>
        <span className="bg-warning-soft text-warning rounded-lg  py-3 px-4">
          JD
        </span>
        <span className="bg-error-soft text-error rounded-lg  py-3 px-4">
          JD
        </span>
      </div>
    </ComponentContainer>
  );
};

export default SquareSoftInitial;
