import React, { useState } from "react";
import "./app.css";
import Header from "./components/header";
import VideoList from "./components/videoList";

function App() {
  const [list, setList] = useState();
  const key = "AIzaSyAfkPPaGPSwA7NAjCq-ERgLng1bVyci4_0";

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?key=${key}&part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyAfkPPaGPSwA7NAjCq-ERgLng1bVyci4_0`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => setList(result))
    .catch((error) => console.log("error", error));

  return (
    <>
      <Header />
      <VideoList list={list} />
    </>
  );
}

export default App;
