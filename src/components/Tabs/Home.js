import React from "react";
import "../../App.css";
import HomePage from "../Body/HomePage";
import NoticeBar from "../NoticeUpdates/NoticeBar";
import NoticeBody from "../NoticeUpdates/NoticeBody";

function Home() {
  return (
    <div className="Home">
      <HomePage />
      <NoticeBar />
      <NoticeBody />
    </div>
  );
}

export default Home;
