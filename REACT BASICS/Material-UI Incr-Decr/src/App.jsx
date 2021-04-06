import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";

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
              <Tooltip title="Increment">
                <Button onClick={incR} variant="contained" color="primary">
                  <AddIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Decrement">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "50px" }}
                  onClick={decR}
                >
                  <DeleteIcon />
                </Button>
              </Tooltip>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
