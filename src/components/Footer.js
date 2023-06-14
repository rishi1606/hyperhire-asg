import React from "react";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerleft">
        <div>
          <ImageOutlinedIcon style={{ fontSize: "19px", color: "#919EB6" }} />
        </div>
        <div>
          <span style={{ color: "#AFB9CA" }}>댓글을 남겨주세요.</span>
        </div>
      </div>
      <div className="footerright">
        <span style={{ color: "#AFB9CA" }}>등록</span>
      </div>
    </div>
  );
};

export default Footer;
