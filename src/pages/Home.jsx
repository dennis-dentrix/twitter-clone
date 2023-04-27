import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { TweetCard } from "../components/Elements/Tweet/TweetCard";
import { Trending } from "../components/Elements/Topics/Trending";
import "./home.css";

export const Home = () => {
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      console.log(screenSize);
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <main className="main">
      <div className="center">
        <div className="center-header">
          <h1 className="page-title">Home</h1>
          <div className="user-interactions">
            <div></div>
            <Link to="/" className="interaction-link active">
              For you
            </Link>
            <Link to="/" className="interaction-link">
              Following
            </Link>
            <div></div>
          </div>
        </div>
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </div>
      <div className="left">
        <Trending />
      </div>
    </main>
  );
};
