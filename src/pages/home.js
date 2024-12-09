import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import newsArticlesData from "../data/news_articles.json";
import VideoModal from "../components/video_modal";

const Home = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);

  useEffect(() => {
    setNewsArticles(newsArticlesData);
  }, []);

  const handleCardClick = (videoUrl) => {
    console.log(videoUrl);
    setCurrentVideoUrl(videoUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideoUrl("");
  };

  return (
    <div aria-labelledby="home-page">
      <h2 id="intro">Stay Updated with the Latest AFC News</h2>
      <p className="highlightable">
        Here, you'll find all the latest updates about the Adelaide Football
        Club, from player performance to fan engagement.
      </p>
      <p className="highlightable">
        Feel free to navigate through the sections to explore more about the
        team, our players, and what makes AFC special!
      </p>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        swipeable
        emulateTouch
        showArrows={false}
        className="news-carousel"
        onClickItem={(index) => handleCardClick(newsArticles[index].videoUrl)}
      >
        {newsArticles.map((article, index) => (
          <div key={index} className="card" data-video={article.videoUrl}>
            <img
              src={article.image}
              alt={`${article.title} thumbnail`}
              className="card-img"
            />
            <div className="card-container">
              <h4 className="card-title">
                <b>{article.title}</b>
              </h4>
              <p className="card-description">{article.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <VideoModal show={showModal} handleClose={handleCloseModal}>
        <iframe
          id="videoIframe"
          src={currentVideoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoModal>
    </div>
  );
};

export default Home;
