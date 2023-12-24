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

const SquircleAvatar = () => {
  return (
    <ComponentContainer
      title={"Squircle Avatar"}
      description={
        "Avatars can have a squircle shape. To do this, you should use the mask is-squircle classes. Check out code for detail of usag."
      }
    >
      <div className="flex flex-row gap-4 items-baseline">
        <img src={avatar2} alt="" className="rounded-[35%] w-8 h-8" />
        <img src={avatar1} alt="" className="rounded-[35%] w-10 h-10" />
        <img src={avatar3} alt="" className="rounded-[35%] w-14 h-14" />
        <img src={avatar4} alt="" className="rounded-[35%] w-16 h-16" />
        <img src={avatar5} alt="" className="rounded-[35%] w-20 h-20" />
        <img src={avatar6} alt="" className="rounded-[35%] w-24 h-24" />
      </div>
    </ComponentContainer>
  );
};

export default SquircleAvatar;
