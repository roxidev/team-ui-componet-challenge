import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";

const BasicSkeleton = () => {
  return (
    <div className="">
      <ComponentContainer
        title={"Basic Skeleton"}
        description={
          "Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration. Check out code for detail of usage."
        }
      >
        <div className="animate-pulse border max-w-md border-slate-200">
          {/* top */}
          <div className="flex py-4 px-5 flex-row gap-5 items-center h-full ">
            <div className="">
              <div className="bg-slate-200 h-[70px] w-[70px]  rounded-full"></div>
            </div>
            <div className="h-14 flex flex-col w-full justify-between ">
              <div className="bg-slate-200 w-full h-3 rounded-full"></div>
              <div className="bg-slate-200 w-full h-3 rounded-full"></div>
            </div>
          </div>
          {/* middle */}
          <div className="w-full h-52 bg-slate-200"></div>
          {/* bottom */}
          <div className=" flex flex-col gap-3 py-4 px-5 w-full justify-between ">
            <div className="bg-slate-200 w-full h-3 rounded-full"></div>
            <div className="bg-slate-200 w-8/12 h-3 rounded-full"></div>
          </div>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default BasicSkeleton;
