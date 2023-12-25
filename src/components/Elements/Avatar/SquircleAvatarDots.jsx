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

const SquircleAvatarDots = () => {
  return (
    <ComponentContainer
      title={"Squircle Avatar Dots"}
      description={
        "Avatars can be a dot attached to it. It can be used to indicate the user status. Check out code for detail of usage."
      }
    >
      <div className="flex flex-row gap-4 items-baseline">
        <div className="relative">
          <div className="bg-primary border-2 border-white absolute right-0 h-2 w-2 rounded-full"></div>
          <img src={avatar2} alt="" className="rounded-[40%]  w-8 h-8" />
        </div>
        <div className="relative">
          <div className="bg-primary absolute border-2 border-white right-0 h-3 w-3 rounded-full"></div>
          <img src={avatar1} alt="" className="rounded-[40%] w-10 h-10" />
        </div>
        <div className="relative">
          <div className="bg-primary absolute right-1 border top-0 h-3 w-3 rounded-full"></div>
          <img src={avatar3} alt="" className="rounded-[40%] w-14 h-14" />
        </div>
        <div className="relative">
          <div className="bg-primary absolute right-1 top-0 border-2 border-white h-4 w-4 rounded-full"></div>
          <img src={avatar4} alt="" className="rounded-[40%] w-16 h-16" />
        </div>
        <div className="relative">
          <div className="bg-primary absolute right-2 top-0 border-2 border-white h-4 w-4 rounded-full"></div>
          <img src={avatar5} alt="" className="rounded-[40%] w-20 h-20" />
        </div>
        <div className="relative">
          <div className="bg-primary absolute right-2 top-0 border-2 border-white h-4 w-4 rounded-full"></div>
          <img src={avatar6} alt="" className="rounded-[40%] w-24 h-24" />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default SquircleAvatarDots;
