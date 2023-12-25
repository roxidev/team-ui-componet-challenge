import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const AvatarDotPing = () => {
  return (
    <ComponentContainer
      title={"Avatar Dot Ping"}
      description={
        "Avatar dots can have the ping animation. This can be used to indicate an important message. Check out code for detail of usage."
      }
    >
      <div className="flex row-auto gap-4 items-end">
        {/* Primary */}
        <div className="relative">
          <div className="bg-primary  absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80"></span>
          </div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>
        {/* Secondary */}
        <div className="relative">
          <div className="bg-secondary  absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-80"></span>
          </div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>{" "}
        {/* info */}
        <div className="relative">
          <div className="bg-info  absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-info opacity-80"></span>
          </div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>{" "}
        {/* success */}
        <div className="relative">
          <div className="bg-success  absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-80"></span>
          </div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>{" "}
        {/* warning */}
        <div className="relative">
          <div className="bg-warning  absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-80"></span>
          </div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>{" "}
        {/* error */}
        <div className="relative">
          <div className="bg-error  absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-80"></span>
          </div>
          <p className="rounded-full bg-default  px-4 py-3">JD</p>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default AvatarDotPing;
