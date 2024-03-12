import React from "react";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowDown, MoreVert } from "@mui/icons-material";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revnue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="des">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
          corrupti?
        </p>
        <div className="summery">
          <div className="item positive">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
