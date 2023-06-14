import { Avatar } from "@mui/material";
import React from "react";

const PostHeader = (props) => {
  return (
    <div className="upperMiddle">
      <div className="leftSide">
        <div>
          <Avatar src={props.AvImg} style={{ height: "34px", width: "34px",background:props.back }}></Avatar>
        </div>
        <div>
          <div className="flexCol">
            <div className="flex">
              <span className="firstSpan">{props.title} &nbsp; </span>
              <div>{props.check}</div>
              <div style={{ marginTop: "-4px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    marginLeft: "4px",
                    color: "#919EB6",
                  }}
                >
                  1일전
                </span>
              </div>
            </div>
            <span className="secondSpan">{props.subTitle}</span>
          </div>
        </div>
      </div>
      <div className="rightSide">{props.button}</div>
    </div>
  );
};

export default PostHeader;
