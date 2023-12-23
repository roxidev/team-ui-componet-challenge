import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ComponentContainer from "../ui/ComponentContainer/ComponentContainer";

const RoundedDividedPagination = () => {
  return (
    <div className="drop-shadow-2xl  rounded-xl shadow-slate-50">
      <ComponentContainer
        title={"Divided Pagination"}
        description={
          "Pagination can be divided. Check out code for detail of usa."
        }
      >
        <div className="inline-block">
          <ol className="  inline-flex gap-2 flex-row rounded-full ">
            <li
              className="flex items-center bg-slate-200  justify-center px-2 duration-300 py-[6px]  rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              <IoIosArrowBack />
            </li>
            <li
              className="px-3 bg-slate-200  duration-300 py-[6px]  rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              1
            </li>
            <li className="px-3 py-[6px] duration-300 rounded-full bg-[#4338CA] hover:bg-blue-700 text-white cursor-pointer">
              2
            </li>
            <li
              className="px-3 py-[6px] bg-slate-200  duration-300 rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              3
            </li>
            <li
              className="px-3 py-[6px] bg-slate-200  duration-300 rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              4
            </li>
            <li
              className="px-3 py-[6px] bg-slate-200  duration-300 rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              5
            </li>
            <li
              className="px-2 flex bg-slate-200  items-center justify-center py-[6px] duration-300 rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              <IoIosArrowForward />
            </li>
          </ol>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default RoundedDividedPagination;
