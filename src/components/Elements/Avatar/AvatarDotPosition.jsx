import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const AvatarDotPosition = () => {
  return (
    <ComponentContainer
      title={"Avatar Dot Position"}
      description={
        "Avatar dot position can be up, down, left and right. Check out code for detail of usage."
      }
    >
      <div className="flex row-auto gap-4 items-end">
        {/* top right */}
        <div className="relative">
          <div className="bg-primary  absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80"></span>
          </div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>
        {/* top left */}
        <div className="relative">
          <div className="bg-primary  absolute border-2 border-white left-0 top-0 h-[14px] w-[14px] rounded-full">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80"></span>
          </div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>
        {/* bottom right */}
        <div className="relative">
          <div className="bg-primary  absolute border-2 border-white right-0 bottom-0 h-[14px] w-[14px] rounded-full">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80"></span>
          </div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>
        {/* bottom left */}
        <div className="relative">
          <div className="bg-primary  absolute border-2 border-white left-0 bottom-0 h-[14px] w-[14px] rounded-full">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80"></span>
          </div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default AvatarDotPosition;
