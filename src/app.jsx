import React, { useEffect, useState } from "react";
import Header from "./components/header";
import VideoList from "./components/videoList";
function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setList(items.items);
      }
    });
    return () => (mounted = false);
  }, []);
  const key = "AIzaSyCFCAgowuOWz9s8IbNa3kAENteJ2DuvmrI";
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  };
  function getList() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?key=${key}&part=snippet&maxResults=10&chart=mostPopular&key=AIzaSyAfkPPaGPSwA7NAjCq-ERgLng1bVyci4_0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  }
  return (
    <>
      <Header />
      <VideoList list={list} />
    </>
  );
}
export default App;
