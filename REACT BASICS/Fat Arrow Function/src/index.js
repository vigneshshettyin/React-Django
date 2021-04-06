import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

// function getData(val) {
//   return <Card imgsrc={val.imgsrc} title={val.title} para={val.para} />;
// }

ReactDOM.render(
  <>
    <h1 className="PNHEAD">Prime & Netflix Shows</h1>
    <div className="grid">
      {/* {Sdata.map(getData)} */}
      {Sdata.map((val) => {
        return <Card imgsrc={val.imgsrc} title={val.title} para={val.para} />;
      })}
    </div>
  </>,
  document.getElementById("root")
);
