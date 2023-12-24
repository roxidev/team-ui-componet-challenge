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

const RoundedAvatar = () => {
  return (
    <ComponentContainer
      title={"Rounded Avatar"}
      description={
        "The Avatar component creates a scalable, colorable element that can have text, icon or image within its shape. Check out code for detail of usage."
      }
    >
      <div className="flex flex-row gap-4 items-baseline">
        <img src={avatar2} alt="" className="rounded-full w-8 h-8" />
        <img src={avatar1} alt="" className="rounded-full w-10 h-10" />
        <img src={avatar3} alt="" className="rounded-full w-14 h-14" />
        <img src={avatar4} alt="" className="rounded-full w-16 h-16" />
        <img src={avatar5} alt="" className="rounded-full w-20 h-20" />
        <img src={avatar6} alt="" className="rounded-full w-24 h-24" />
      </div>
    </ComponentContainer>
  );
};

export default RoundedAvatar;
