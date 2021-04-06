import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1 className="PNHEAD">Prime & Netflix Shows</h1>
    <div className="grid">
      <Card
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        para={Sdata[0].para}
      />
    </div>
  </>,
  document.getElementById("root")
);
