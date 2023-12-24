import React from 'react'
import BasicAlert from "./BasicAlert";
import OutlinedAlert from "./OutlinedAlert";

const Alert = () => {
  return (
    <div className="grid h-full grid-cols-2 flex-col gap-5 m-10">
      <BasicAlert />
      <OutlinedAlert />
    </div>
  );
};

export default Alert