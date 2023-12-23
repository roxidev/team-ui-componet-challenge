import React from "react";
import BasicPagination from "./BasicPagination";
import RoundedPagination from "./RoundedPagination";
import DividedPagination from "./DividedPagination";
import RoundedDividedPagination from "./RoundedDividedPagination";
import PaginationSize from "./PaginationSize";

const Pagination = () => {
  return (
    <div className="flex flex-col gap-5 m-10">
      <BasicPagination />
      <RoundedPagination />
      <DividedPagination />
      <RoundedDividedPagination />
      <PaginationSize />
    </div>
  );
};

export default Pagination;
