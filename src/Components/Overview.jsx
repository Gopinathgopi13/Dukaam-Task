import React from "react";
// import "../Style/style.css";
import '../Style/Overview.css';
import DownArrowSVG from "../assets/DownArrowSVG";
import QuestionSVG from "../assets/QuestionSVG";
import RightSVG from "../assets/RightSVG";
function Overview() {
  return (
    <section className="overview-wrapper">
      <div className="overview">
        <div className="overview_title">Overview</div>
        <div className="overview_filter">
          <span>This month</span>

          <DownArrowSVG />
        </div>
      </div>
      <div className="overview-cards">
        <div className="active-card">
          <div className="card_header">
            <div className="title">Next Payout</div>

            <QuestionSVG />
          </div>
          <div className="card_body">
            <div className="amount">₹2,312.23</div>
            <div className="info">
              <div className="info_text">23 orders</div>
              <RightSVG />
            </div>
          </div>
          <div className="card_next">
            <div className="title">Next payout date:</div>
            <div className="text">Today, 04:00PM</div>
          </div>
        </div>

        <div className="cards_card">
          <div className="card_header">
            <div className="title">Amount Pending</div>
            <QuestionSVG />
          </div>
          <div className="card_body">
            <div className="amount">₹92,312.20</div>
            <div className="info">
              <div className="info_text">13 orders</div>

              <RightSVG />
            </div>
          </div>
        </div>
        <div className="cards_card">
          <div className="card_header">
            <div className="title">Amount Processed</div>

            <QuestionSVG />
          </div>
          <div className="card_body">
            <div className="amount">₹23,92,312.19</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
