import React, { useEffect, useState } from "react";
import "../styles/css/HomeContent.css";
import axios from "axios";
import moment from "moment";
import NumberFormat from "react-number-format";

export default function HomeContent() {
  const baseUrl = "https://covid19.mathdro.id/api/";
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(baseUrl);
      return setData(data);
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="home-content">
      <p>Covid Data</p>
      <div className="statistic">
        {data && <img src={data.image} alt="statistic" />}
      </div>
      {data && (
        <>
          <h2 className="date">
            Last Updated at {moment(data.lastUpdate).format("LL")}
          </h2>
          <div className="globalData">
            <div className="info">
              <h3>Confirmed</h3>
              <NumberFormat
                className="number"
                value={data.confirmed.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </div>
            <div className="info">
              <h3>Recovered</h3>
              <NumberFormat
                className="number"
                value={data.recovered.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </div>
            <div className="info">
              <h3>Deaths</h3>
              <NumberFormat
                className="number"
                value={data.deaths.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
