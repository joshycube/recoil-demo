import * as React from "react";
import { RecoilRoot } from "recoil";

import Menu from "./components/menu";
import Cart from "./components/cart";

import "./App.css";

export default () => (
  <RecoilRoot>
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>6 items</span>
            </div>
            <div className="col-6 menu-summary-right">
              6x <span className="dietary">ve</span>
              4x <span className="dietary">v</span>
              12x <span className="dietary">n!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <Menu />
          </div>
          <div className="col-8">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  </RecoilRoot>
);
