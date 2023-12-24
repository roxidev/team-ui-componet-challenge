import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const SquareSoftInitial = () => {
  return (
    <ComponentContainer
      title={"Initial Avatar"}
      description={
        "In the absence of a image, you can use the initial. Initials can be used in various variants. Check out code for detail of usage."
      }
    >
      <div className="flex flex-row gap-4 items-baseline">
        <span className="bg-default text-color-heading rounded-full  py-3 px-4">
          JD
        </span>
        <span className="bg-primary text-white rounded-full  py-3 px-4">
          JD
        </span>
        <span className="bg-secondary text-white rounded-full  py-3 px-4">
          JD
        </span>
        <span className="bg-info text-white rounded-full  py-3 px-4">JD</span>
        <span className="bg-success text-white rounded-full  py-3 px-4">
          JD
        </span>
        <span className="bg-warning text-white rounded-full  py-3 px-4">
          JD
        </span>
        <span className="bg-error text-white rounded-full  py-3 px-4">JD</span>
      </div>
    </ComponentContainer>
  );
};

export default SquareSoftInitial;
