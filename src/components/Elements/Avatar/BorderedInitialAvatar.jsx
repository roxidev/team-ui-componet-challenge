import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const BorderedInitialAvatar = () => {
  return (
    <ComponentContainer
      title={"Bordered Initial Avatar"}
      description={
        "Initial avatars can have a border. Check out code for detail of usage."
      }
    >
      <div className="flex flex-row gap-4 items-baseline">
        <span className="bg-primary-soft border-2 border-primary-border text-primary rounded-full  py-3 px-4">
          JD
        </span>
        <span className="bg-secondary-soft border border-secondary-border text-secondary rounded-full  py-3 px-4">
          JD
        </span>
        <span className="bg-info-soft border border-info-border text-info rounded-full  py-3 px-4">
          JD
        </span>
        <span className="bg-success-soft border border-success-border text-success rounded-full  py-3 px-4">
          JD
        </span>
        <span className="bg-warning-soft border border-warning-border text-warning rounded-full  py-3 px-4">
          JD
        </span>
        <span className="bg-error-soft border border-error-border text-error rounded-full  py-3 px-4">
          JD
        </span>
      </div>
    </ComponentContainer>
  );
};

export default BorderedInitialAvatar;
