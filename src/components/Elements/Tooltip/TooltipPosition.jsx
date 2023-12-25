import React from "react";
import ComponentContainer from "../../ui/ComponentContainer/ComponentContainer";
import { Tooltip } from "react-tooltip";

const TooltipPosition = () => {
  return (
    <div>
      <ComponentContainer
        title={"Tooltip Position"}
        description={
          "Tooltip can be placed in four base ways in relation to the reference element. Check out code for detail of usage."
        }
      >
        <div className="grid grid-cols-3 text-center w-5/12 justify-center gap-5">
          {/* top */}
          <button
            id="top"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Top
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#top"
              place="top"
              content="Top"
            />
          </button>
          {/* top Start */}
          <button
            id="top-start"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Top Start
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#top-start"
              place="top-start"
              content="Top Start"
            />
          </button>
          {/* Top End */}
          <button
            id="top-end"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            End Top
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#top-end"
              place="top-end"
              content="Top End"
            />
          </button>
          {/* Right */}
          <button
            id="right"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Right
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#right"
              place="right"
              content="Right"
            />
          </button>
          {/* Right Start */}
          <button
            id="right-start"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Right Start
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#right-start"
              place="right-start"
              content="Right Start"
            />
          </button>
          {/* Right End */}
          <button
            id="right-end"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Right End
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#right-end"
              place="right-end"
              content="Right End"
            />
          </button>
          {/* Bottom */}
          <button
            id="bottom"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Bottom
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#bottom"
              place="bottom"
              content="Bottom"
            />
          </button>
          {/* Bottom Start */}
          <button
            id="bottom-start"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Bottom Start
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#bottom-start"
              place="bottom-start"
              content="Bottom Start"
            />
          </button>
          {/* Bottom End */}
          <button
            id="bottom-end"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Bottom End
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#bottom-end"
              place="bottom-end"
              content="Bottom End"
            />
          </button>
          {/* Left */}
          <button
            id="left"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Left
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#left"
              place="left"
              content="Left"
            />
          </button>
          {/* Left Start */}
          <button
            id="left-start"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Left Start
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#left-start"
              place="left-start"
              content="Left Start"
            />
          </button>
          {/* Left End */}
          <button
            id="left-end"
            className="text-primary hover:bg-primary hover:text-white duration-200 ease-in-out border  py-2 rounded-lg border-primary"
          >
            Left End
            <Tooltip
              style={{
                background: "#10b981",
                padding: "5px 10px",
                color: "#fff",
              }}
              anchorSelect="#left-end"
              place="left-end"
              content="Left End"
            />
          </button>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default TooltipPosition;
