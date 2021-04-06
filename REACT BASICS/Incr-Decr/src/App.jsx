import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const [value, setDefault] = useState(0);

  const incR = () => {
    setDefault(value + 1);
  };

  const decR = () => {
    if (value === 0) {
      alert("Counter is already at zero!");
    } else {
      setDefault(value - 1);
    }
  };

  return (
    <>
      <div className="container" style={{ padding: "100px" }}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center text-capitalize">{value}</h1>
            <center>
              <button
                onClick={incR}
                type="submit"
                className="btn btn-primary mb-3"
              >
                Increment
              </button>
              <button
                className="btn btn-danger mb-3"
                style={{ marginLeft: "50px" }}
                onClick={decR}
              >
                Decrement
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
