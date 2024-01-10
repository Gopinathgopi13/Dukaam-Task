import React from "react";
import "../Style/style.css";
import Home from "../assets/Home";
import Order from "../assets/Order";
import Product from "../assets/Product";
import Delivery from "../assets/Delivery";
import Analytics from "../assets/Analytics";
import Payouts from "../assets/Payouts";
import Discount from "../assets/Discount";
import Audience from "../assets/Audience";
import Appearance from "../assets/Appearance";
import Plugins from "../assets/Plugins";
import FooterSVG from "../assets/FooterSVG";
import DownArrowSVG from '../assets/DownArrowSVG'
function Sidebar() {
  return (
    <aside>
      <div className="sidebar">
        <div className="user">
          <div className="user_logo">
            <img src="../img/store-def.jpg" alt="user logo" />
          </div>
          <div className="user_details">
            <div className="name">Nishyan</div>
            <div className="store">Visit store</div>
          </div>
          <div className="user_dropdown">
            <DownArrowSVG/>
          </div>
        </div>
        <ul className="menu">
          <li className="menu-item">
            <a href="/" className="menu-item_icon">
              <Home />
            </a>
            <div className="menu-item_text">Home</div>
          </li>
          <li className="menu-item">
            <a className="menu-item_icon">
              <Order />
            </a>
            <div className="menu-item_text">Orders</div>
          </li>

          <li className="menu-item">
            <a className="menu-item_icon">
              <Product />
            </a>
            <div className="menu-item_text">Products</div>
          </li>

          <li className="menu-item">
            <a className="menu-item_icon">
              <Delivery />
            </a>
            <div className="menu-item_text">Delivery</div>
          </li>

          <li className="menu-item">
            <a className="menu-item_icon">
              <Analytics />
            </a>
            <div className="menu-item_text">Analytics</div>
          </li>

          <li className="menu-item menu-active">
            <a className="menu-item_icon">
              <Payouts />
            </a>
            <div className="menu-item_text">Payouts</div>
          </li>
          <li className="menu-item">
            <a className="menu-item_icon">
              <Discount />
            </a>
            <div className="menu-item_text">Discounts</div>
          </li>

          <li className="menu-item">
            <a className="menu-item_icon">
              <Audience />
            </a>
            <div className="menu-item_text">Audience</div>
          </li>

          <li className="menu-item">
            <a className="menu-item_icon">
              <Appearance />
            </a>
            <div className="menu-item_text">Appearance</div>
          </li>

          <li className="menu-item">
            <a className="menu-item_icon">
              <Plugins />
            </a>
            <div className="menu-item_text">Plugins</div>
          </li>
        </ul>
        <div className="credits">
          <div className="credits_icon">
            <FooterSVG />
          </div>
          <div className="credits_details">
            <span>Available credits</span>
            <span className="balance">222.10</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
