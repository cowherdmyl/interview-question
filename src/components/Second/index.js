import React from "react";
import bgimg from "../../assets/images/bg.jpg";

function Second() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default Second;
