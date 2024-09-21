import React from "react";
import "./Home.css";

function Highlight() {
  return (
    <div className="highlights flex">
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <h1>1000+</h1>
          <p>Comprehensive and top notch learning resources are available</p>
        </div>
      </div>
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <h1>800+</h1>
          <p>Development resources which required for a sofware development</p>
        </div>
      </div>
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <h1>50+</h1>
          <p>Job profiles are listed yet in cureent scenario</p>
        </div>
      </div>
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <h1>2000+</h1>
          <p>Best Learning Material and Career Guidance for Engineering Students.</p>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
