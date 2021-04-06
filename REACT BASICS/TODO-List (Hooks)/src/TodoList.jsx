import React from "react";

const TodoList = (props) => {
  return (
    <h4>
      {props.value}
      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
    </h4>
  );
};

export default TodoList;
