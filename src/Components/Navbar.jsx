import React from "react";
import "../Style/style.css";
import '../Style/Navbar.css';
import QuestionSVG from "../assets/QuestionSVG";
import SearchSVG from "../assets/SearchSVG";
import NotificationSVG from "../assets/NotificationSVG";
import MenuSVG from "../assets/MenuSVG";
function Navbar() {
  return (
    <div className="header">
      <div className="header_heading">
        <div className="heading_title">Payouts</div>
        <div className="heading_info">
          <div className="info_icon">
            <QuestionSVG />
          </div>
          <div className="info_text">How it works?</div>
        </div>
      </div>
      <div className="header_search">
        <div className="search_box">
          <div className="box_icon">
            <SearchSVG />
          </div>
          <input
            className="box_input"
            type="text"
            placeholder="Search features, tutorial, etc."
          />
        </div>
      </div>
      <div className="header_actions">
        <div className="actions_notifications">
          <NotificationSVG />
        </div>
        <div className="actions_dropdown">
          <MenuSVG />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
