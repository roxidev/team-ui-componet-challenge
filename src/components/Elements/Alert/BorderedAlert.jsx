import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";
import { FaExclamationCircle } from "react-icons/fa";
import { BsExclamationTriangle } from "react-icons/bs";

const BorderedAlert = () => {
  return (
    <div className="h-full">
      <ComponentContainer
        title={"Bordered Alert"}
        description={
          "Alerts can have a border. Check out code for detail of usage."
        }
      >
        <p className="text-base text-primary border-2 border-primary  bg-primary-soft  py-4 px-5 rounded-full">
          This is simple alert
        </p>
        <p className="text-base text-secondary border-l-8 border-secondary  bg-secondary-soft  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="text-base text-info  bg-info-soft  py-4 px-5 rounded-full">
          This is simple alert
        </p>
        <p className="text-base text-success border-2 border-success  bg-success-soft  py-4 px-5 rounded-lg">
          This is simple alert
        </p>
        <p className="flex flex-row gap-3 items-center text-base text-warning border-r-8 border-warning  bg-warning-soft  py-4 px-5 rounded-lg">
          <BsExclamationTriangle className="text-warning text-xl" />
          This is simple alert
        </p>
        <p className="text-base text-error flex flex-row gap-3 items-center  border-2  border-error  py-4 px-5 rounded-lg">
          <FaExclamationCircle className="text-error text-xl" />
          This is simple alert
        </p>
      </ComponentContainer>
    </div>
  );
};

export default BorderedAlert;
