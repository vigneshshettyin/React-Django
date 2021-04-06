import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
const Climate = () => {
  const [city, setCity] = useState();

  const [data, setData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18d0fd82fd86e1a82d5cc13758a09b31&units=imperial`;
      const response = await fetch(url);
      const data_opt = await response.json();
      setData(data_opt.main);
    };

    fetchApi();
  });

  const getCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <div>
        <h1 className="text-center text-danger pt-5">
          Real Time Weather Data 🐳
        </h1>
        <h6 className="text-center text-danger">
          API USED :
          <a
            className="text-decoration-none"
            href="https://developer.accuweather.com/"
          >
            AccuWeather 🌈
          </a>
        </h6>
        <div className="pt-4 container-fluid" style={{ width: "50%" }}>
          <input
            onChange={getCity}
            value={city}
            className="center form-control form-control-lg"
            type="text"
            placeholder="Enter your city"
          />
        </div>
        {!data ? (
          <div style={{ width: "50%" }} className="pt-4 container-fluid">
            <h2 className="alert-danger text-center">No data Found! 😠</h2>
          </div>
        ) : (
          <div className="pt-4 container-fluid" style={{ width: "50%" }}>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th scope="row">City Name</th>
                  <td className="text-capitalize">{city}</td>
                </tr>
                <tr>
                  <th scope="row">Current Temparature</th>
                  <td>{data.temp} °F</td>
                </tr>
                <tr>
                  <th scope="row">Max Temparature</th>
                  <td>{data.temp_max} °F</td>
                </tr>
                <tr>
                  <th scope="row">Min Temparature</th>
                  <td>{data.temp_min} °F</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Climate;
