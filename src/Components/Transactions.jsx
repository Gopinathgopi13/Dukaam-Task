import React from "react";
import '../Style/Transaction.css'
import SearchSVG from "../assets/SearchSVG";
import UpDownArrow from "../assets/UpDownArrow";
import DownloadSVG from "../assets/DownloadSVG";
function Transactions() {
  return (
    <section className="transactions">
      <div className="transactions_title">Transactions | This Month</div>
      <div className="transactions_filters">
        <div style={{ color: "white", backgroundColor: "#146eb4" }}>
          Payouts (22)
        </div>
        <div>Refunds (2)</div>
      </div>

      <div className="transactions_table">
        <div className="table_header">
          <div className="table_search">
            <SearchSVG />
            <input type="text" placeholder="Order ID or transaction ID" />
          </div>
          <div className="table_actions">
            <div className="sort">
              Sort
              <UpDownArrow />
            </div>
            <div className="download">
              <DownloadSVG />
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Transaction ID</th>
                <th>Order amount</th>
                <th>Transaction fees</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-date">Today, 09:00 PM</td>
                <td className="td-status">
                  <div className="status-processing"></div>Processing
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
              <tr>
                <td className="td-date">Today, 03:00 PM</td>
                <td className="td-status">
                  <div className="status-success"></div>Successful
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
              <tr>
                <td className="td-date">Today, 09:00 AM</td>
                <td className="td-status">
                  <div className="status-success"></div>Successful
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
              <tr>
                <td className="td-date">Yesterday, 3:00 PM</td>
                <td className="td-status">
                  <div className="status-success"></div>Successful
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
              <tr>
                <td className="td-date">Yesterday, 09:00 AM</td>
                <td className="td-status">
                  <div className="status-success"></div>Successful
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
              <tr>
                <td className="td-date">Yesterday, 09:00 AM</td>
                <td className="td-status">
                  <div className="status-success"></div>Successful
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
              <tr>
                <td className="td-date">12 Jul 2023, 11:00 AM</td>
                <td className="td-status">
                  <div className="status-success"></div>Successful
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
              <tr>
                <td className="td-date">11 Jul 2023, 11:00 AM</td>
                <td className="td-status">
                  <div className="status-success"></div>Successful
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
              <tr>
                <td className="td-date">10 Jul 2023, 11:00 AM</td>
                <td className="td-status">
                  <div className="status-success"></div>Successful
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
              <tr>
                <td className="td-date">9 Jul 2023, 11:00 AM</td>
                <td className="td-status">
                  <div className="status-success"></div>Successful
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
              <tr>
                <td className="td-date">8 Jul 2023, 11:00 AM</td>
                <td className="td-status">
                  <div className="status-success"></div>Successful
                </td>
                <td className="td-trans">131634495747</td>
                <td>₹10,125.00</td>
                <td>₹1,125.00</td>
                <td className="td-total">₹9,312</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Transactions;
