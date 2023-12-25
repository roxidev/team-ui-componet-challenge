import React from 'react'
import BasicAlert from "./BasicAlert";
import OutlinedAlert from "./OutlinedAlert";
import SoftAlert from "./SoftAlert";
import BorderedAlert from "./BorderedAlert";

const Alert = () => {
  return (
    <div className="grid h-full grid-cols-2 flex-col gap-5 m-10">
      <BasicAlert />
      <OutlinedAlert />
      <SoftAlert />
      <BorderedAlert />
    </div>
  );
};

export default Alert