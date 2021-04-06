import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import TodoList from "./TodoList";

const App = () => {
  const [iteam, setIteam] = useState("");

  const [list, setList] = useState([]);

  const deleteIteam = (id) => {
    setList((prev) => {
      return prev.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  const addList = (event) => {
    setIteam(event.target.value);
  };

  const updateList = (event) => {
    event.preventDefault();
    setList((prev) => {
      return [...prev, iteam];
    });
    setIteam("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center text-capitalize">TODO LIST</h1>
            <form onSubmit={updateList} className="row g-3">
              <div className="col-auto">
                <input
                  value={iteam}
                  onChange={addList}
                  type="text"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Add TODO"
                  required
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                  Submit
                </button>
              </div>
            </form>
            {list.map((value, index) => {
              return (
                <TodoList
                  onSelect={deleteIteam}
                  id={index}
                  key={index}
                  value={value}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
