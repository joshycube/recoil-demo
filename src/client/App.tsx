import * as React from "react";
import { RecoilRoot } from "recoil";

import Menu from "./components/menu";
import Cart from "./components/cart";
import MenuFilter from "./components/menuFilter";
import Summary from "./components/summary";
import ErrorBoundary from "./components/errorBoundary";

import "./App.css";

export default () => (
  <RecoilRoot>
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <Summary />
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <ErrorBoundary>
            <div className="col-4">
              <MenuFilter />
              <React.Suspense fallback={<div>Loading...</div>}>
                <Menu />
              </React.Suspense>
            </div>
          </ErrorBoundary>
          <div className="col-8">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  </RecoilRoot>
);
