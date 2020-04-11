import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import about from "../../../assets/images/find-peace-yoga.png";
const StaticPage = () => {
  const vidStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  };
  // looping through video data table goes here//
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);
  const getvideos = () => {
    axios
      .get(`/video`)
      .then(res => {
        setVideos(res.data);
      })
      .catch(err => {
        console.log(err.res);
      });
  };
  return (
    <div id="master-div">
      <div className="static-page-banner">
        {" "}
        <img src={about} alt="static-page" className="static-page-banner" />
      </div>
      <div>
        {videos.map(videos => {
          return (
            <div id="container" key={videos.id}>
              <div className="sub-title">
                <h5>{videos.title}</h5>
              </div>
              <div className="videos"></div>
              <ReactPlayer url={videos.url} light controls style={vidStyle} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default () => <StaticPage />;
