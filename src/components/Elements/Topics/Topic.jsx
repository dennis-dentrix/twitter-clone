import React from "react";

export const Topic = () => {
  return (
    <div className="topic">
      <div className="topic-info">
        <p className="topic-location">Trending in Kenya</p>
        <p className="topic-topic">Punguza mzigo</p>
        <p className="topic-tweets">6,300 Tweets</p>
      </div>

      <div className="topic-options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="14171A"
          className="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      </div>
    </div>
  );
};
