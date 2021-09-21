import React, { useState, useEffect } from "react";
import { getApodBetweenDates } from "../../api/apod/index";
import TopBar from "../../components/TopBar/index";
import ImageCard from "../../components/ImageCard/index";
import loadingGif from "../../assets/loading.gif";

export default function MainPage() {
  const [data, setData] = useState("loading");

  useEffect(() => {
    getApodBetweenDates("2021-09-18", "2021-09-20").then((res) => setData(res));
  }, []);

  console.log(data);

  return (
    <div className="main-page">
      <TopBar />
      <div className="content">
        {data === "loading" ? (
          <img src={loadingGif}></img>
        ) : (
          data?.map((el) => <ImageCard data={el} />)
        )}
      </div>
    </div>
  );
}
