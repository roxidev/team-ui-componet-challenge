import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const SquircleInitialAvatar = () => {
  return (
    <ComponentContainer
      title={"Squircle Initial Avatar"}
      description={
        "Initial avatars can have a squircle shape. To do this, you should use the mask is-squircle utility. Check out code for detail of usage."
      }
    >
      <div className="flex flex-row gap-4 items-baseline">
        <span className="bg-default text-color-heading rounded-lg  py-3 px-4">
          JD
        </span>
        <span className="bg-primary text-white rounded-lg  py-3 px-4">JD</span>
        <span className="bg-secondary text-white rounded-lg  py-3 px-4">
          JD
        </span>
        <span className="bg-info text-white rounded-lg  py-3 px-4">JD</span>
        <span className="bg-success text-white rounded-lg  py-3 px-4">JD</span>
        <span className="bg-warning text-white rounded-lg  py-3 px-4">JD</span>
        <span className="bg-error text-white rounded-lg  py-3 px-4">JD</span>
      </div>
    </ComponentContainer>
  );
};

export default SquircleInitialAvatar;
