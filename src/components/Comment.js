import React from "react";
const Comment = (props) => {
  return (
    <div className="comments">
      <div className="flex-comment">
        <div className="flex">
          <span>
            {props.heart}
          </span>
          <span className="numbers">5</span>
        </div>
        <div className="flex">
          <span>
            {props.sms}
          </span>
          <span className="numbers">{props.booknumber}</span>
        </div>
        <div className="flex">
          <span>
            {props.bookmark}
          </span>
          <span className="numbers">{props.number}</span>
        </div>
        <div>
          <span>
            {props.horizon}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
