import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const SoftInitialAvatar = () => {
  return (
    <ComponentContainer
      title={"Soft Initial Avatar"}
      description={
        "Initial avatars can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
      }
    >
      <div className="flex flex-row gap-4 items-baseline">
        <span className="bg-primary-soft text-primary rounded-[40%]  py-3 px-4">
          JD
        </span>
        <span className="bg-secondary-soft text-secondary rounded-[40%]  py-3 px-4">
          JD
        </span>
        <span className="bg-info-soft text-info rounded-[40%]  py-3 px-4">
          JD
        </span>
        <span className="bg-success-soft text-success rounded-[40%]  py-3 px-4">
          JD
        </span>
        <span className="bg-warning-soft text-warning rounded-[40%]  py-3 px-4">
          JD
        </span>
        <span className="bg-error-soft text-error rounded-[40%]  py-3 px-4">
          JD
        </span>
      </div>
    </ComponentContainer>
  );
};

export default SoftInitialAvatar;
