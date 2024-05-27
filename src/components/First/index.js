import React from "react";
import "./index.scss";
// import myVideo from "../../assets/video/use.mp4";
import mygif from "../../assets/video/use.gif";
import ScrollList from "../ScrollList";

function First(props) {
  return (
    <div className="first-content">
      <div className="video-wrapper">
      <img src={mygif} alt=""  id="background-video"/>
        {/* <video autoPlay muted loop>
          <source src={myVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video> */}
      </div>
      <div className="scroll-wrapper">
        <ScrollList
          {...props}
          items={[
            "When you want something,",
            "all the universe conspires",
            "in helping you to achieve it.",
            "in helping you to achieve it.",
            "Paulo Coelho",
            "",
            "Feed is that conspiracy:",
            "the conspiracy of trust.",
            "",
            "Trust is the single",
            "most important ingredient ",
            "missing from digital relationships.",
            "",
            "Boston Consulting Group",
            "and the World Economic Forum",
            "forecast the digital economy",
            "to be worth between",
            "1.5 and 2.5 trillion dollars",
            "by 2016.",
            "",
            "The difference",
            "between those numbers",
            "is trust",
            "",
            "",
            "Feed is a digital mechanism of",
          ]}
        />
      </div>
    </div>
  );
}

export default First;
