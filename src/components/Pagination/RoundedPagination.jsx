import React from "react";
import ComponentContainer from "../ui/ComponentContainer/ComponentContainer";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const RoundedPagination = () => {
  return (
    <div className="drop-shadow-2xl rounded-xl shadow-slate-50">
      <ComponentContainer
        title={"Rounded Pagination"}
        description={
          "Pagination can have a rounded shape. Check out code for detail of usage."
        }
      >
        <div className="inline-block">
          <ol className="  inline-flex flex-row rounded-full bg-slate-200 ">
            <li
              className="flex items-center justify-center px-3 duration-300 py-[6px]  rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              <IoIosArrowBack />
            </li>
            <li
              className="px-3 duration-300 py-[6px]  rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              1
            </li>
            <li className="px-3 py-[6px] duration-300 rounded-full bg-[#4338CA] hover:bg-blue-700 text-white cursor-pointer">
              2
            </li>
            <li
              className="px-3 py-[6px] duration-300 rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              3
            </li>
            <li
              className="px-3 py-[6px] duration-300 rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              4
            </li>
            <li
              className="px-3 py-[6px] duration-300 rounded-full text-inherit
            hover:bg-slate-300 cursor-pointer"
            >
              5
            </li>
            <li
              className="px-3 flex items-center justify-center py-[6px] duration-300 rounded-full text-inherit
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

export default RoundedPagination;
