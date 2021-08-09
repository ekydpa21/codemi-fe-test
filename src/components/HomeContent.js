import React, { useEffect, useState } from "react";
import "../styles/css/HomeContent.css";
import axios from "axios";

export default function HomeContent() {
  const baseUrl = "https://covid19.mathdro.id/api/";
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(baseUrl);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="home-content">
      <p>Covid Data</p>
      <div className="statistic">
        {data && <img src={data.image} alt="statistic" />}
      </div>
    </div>
  );
}
