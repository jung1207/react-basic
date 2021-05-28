import React, { useState } from "react";
function VideoList(props) {
  const data = props.list;
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <div className="card mb-3" style={{ width: "323px" }}>
          <div className="row g-0">
            <div className="col-md-20">
              <img src={item.snippet.thumbnails.medium.url} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.snippet.title}</h5>
                <small className="text-muted">{item.snippet.channelId}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default VideoList;
