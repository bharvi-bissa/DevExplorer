import React from "react";
import loader from "./loader.gif";

export default () => {
  return (
    <div>
      <img
        src={loader}
        style={{ width: "50px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
