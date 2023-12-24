import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
} from "../../../assets/Images";

const AvatarDotColors = () => {
  return (
    <ComponentContainer
      title={"Avatar Dot Color"}
      description={
        "Avatar dots can be used in various colors. It can be used to indicate the user status. Check out code for detail of usage."
      }
    >
      <div className="flex flex-row gap-4 items-baseline">
        <div className="relative">
          <div className="bg-slate-400 absolute border-2 border-white right-0 h-[14px] w-[14px]  rounded-full"></div>
          <img src={avatar2} alt="" className="rounded-full  w-14 h-14" />
        </div>
        <div className="relative">
          <div className="bg-primary absolute border-2 border-white right-0 h-[14px] w-[14px]  rounded-full"></div>
          <img src={avatar1} alt="" className="rounded-full w-14 h-14" />
        </div>
        <div className="relative">
          <div className="bg-secondary absolute border-2 border-white right-0 h-[14px] w-[14px]  rounded-full"></div>
          <img src={avatar3} alt="" className="rounded-full w-14 h-14" />
        </div>
        <div className="relative">
          <div className="bg-info absolute border-2 border-white right-0 h-[14px] w-[14px]  rounded-full"></div>
          <img src={avatar4} alt="" className="rounded-full w-14 h-14" />
        </div>
        <div className="relative">
          <div className="bg-success absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full"></div>
          <img src={avatar5} alt="" className="rounded-full w-14 h-14" />
        </div>
        <div className="relative">
          <div className="bg-warning absolute border-2 border-white right-0 h-[14px] w-[14px]  rounded-full"></div>
          <img src={avatar6} alt="" className="rounded-full w-14 h-14" />
        </div>
        <div className="relative">
          <div className="bg-error absolute border-2 border-white right-0 h-[14px] w-[14px]  rounded-full"></div>
          <img src={avatar7} alt="" className="rounded-full w-14 h-14" />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default AvatarDotColors;
