import React from "react";
import ReactLoading from "react-loading";
import slate from "./slate.png"
const LoadScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: "30%",
      }}
    >
      <h4 style={{ paddingRight: "5px" }}>
        <img style={{ width: "30px" }} alt="slate img" src={slate} />{" "}
        {" "}Loading Movies{" "}
      </h4>
      <br />
      <ReactLoading type="spin" color="grey" />
    </div>
  );
};

export default LoadScreen;
