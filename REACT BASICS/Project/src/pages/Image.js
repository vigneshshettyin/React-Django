import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
const Image = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="container-fluid pt-5">
        <h1 className="text-center text-danger">Real Time Image Search 🦸</h1>
        <h6 className="text-center text-danger">
          API USED :
          <a
            className="text-decoration-none"
            href="https://source.unsplash.com/"
          >
            Unsplash 💁
          </a>
        </h6>
      </div>
      <div className="container-fluid pt-3" style={{ width: "50%" }}>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter your choice of image"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
        />
        {search.length > 0 ? (
          <img
            className="pt-4 embed-responsive"
            src={`https://source.unsplash.com/650x500/?${search}`}
            alt={search}
          />
        ) : (
          <div className="pt-4">
            <h2 className="alert-danger text-center">No data Found! 😠</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Image;
