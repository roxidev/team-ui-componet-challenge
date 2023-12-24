import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "../../../assets/Images";

const InitialWithDots = () => {
  return (
    <ComponentContainer
      title={"Initial With Dots"}
      description={
        "Initial avatars can be a dot attached to it, too. It can be used to indicate the user status. Check out code for detail of usage."
      }
    >
      <div className="flex row-auto gap-4 items-end">
        <div className="relative">
          <div className="bg-primary border-2 border-white absolute right-1 top-1 h-2 w-2 rounded-full"></div>
          <p className="rounded-full bg-default  px-3 py-2">JD</p>
        </div>
        <div className="relative">
          <div className="bg-primary absolute border-2 border-white right-0 h-3 w-3 rounded-full"></div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>
        <div className="relative">
          <div className="bg-primary absolute right-1 border top-0 h-3 w-3 rounded-full"></div>
          <p className="rounded-full bg-default  px-5 py-4">JD</p>
        </div>
        <div className="relative">
          <div className="bg-primary absolute right-1 top-0 border-2 border-white h-4 w-4 rounded-full"></div>
          <p className="rounded-full bg-default  px-7 py-6">JD</p>
        </div>
        <div className="relative">
          <div className="bg-primary absolute right-2 top-0 border-2 border-white h-4 w-4 rounded-full"></div>
          <p className="rounded-full bg-default  px-8 py-7">JD</p>
        </div>
        <div className="relative">
          <div className="bg-primary absolute right-2 top-0 border-2 border-white h-4 w-4 rounded-full"></div>
          <p className="rounded-full bg-default  px-9 py-8">JD</p>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default InitialWithDots;
