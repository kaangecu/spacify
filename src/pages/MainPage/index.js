import React, { useState, useEffect } from "react";
import { getApodBetweenDates } from "../../api/apod/index";
import TopBar from "../../components/TopBar/index";
import ImageCard from "../../components/ImageCard/index";
import loadingGif from "../../assets/loading.gif";

export default function MainPage() {
  const [data, setData] = useState("loading");

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    getApodBetweenDates("2021-09-18", "2021-09-20").then((res) => setData(res));
  }, []);

  const onSearchClick = () => {
    startDate && endDate && getApodBetweenDates(startDate.toISOString().substring(0, 10),endDate.toISOString().substring(0, 10)).then((res) => setData(res));
  };

  return (
    <div className="main-page">
      <TopBar
        onClick={onSearchClick}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <div className="content">
        {data === "loading" ? (
          <img src={loadingGif} alt="loading"></img>
        ) : (
          data?.map((el) => <ImageCard key={el.url} data={el} />)
        )}
      </div>
    </div>
  );
}
