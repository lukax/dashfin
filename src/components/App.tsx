import React from "react";
import Table from "./Table";
import { GlobalStyle } from "./globalStyle";
import SearchTicker from "./SearchTicker/SearchTicker";
import logo from "../img/logo.svg";
export default function App() {
  return (
    <React.Fragment>
      <div style={{ padding: "50px 0px 20px 0px" }}>
        <img src={logo} alt="logo" height="40px" />
      </div>
      <SearchTicker />
      <GlobalStyle />
    </React.Fragment>
  );
}
