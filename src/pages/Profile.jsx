import { Link } from "react-router-dom";
import { Follow } from "../components/Elements/Topics/Follow";
import { Trending } from "../components/Elements/Topics/Trending";
import "./profile.css";
import img from "../assets/profile_pic.jpg";
import cover from "../assets/cover_image.png";
import { TweetCard } from "../components/Elements/Tweet/TweetCard";

export const Profile = () => {
  return (
    <main className="main">
      <section className="center">
        <header className="profile-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <div className="header-user">
            <h1 className="page-title">Denis</h1>
            <p className="header-tweetCount">63 tweets</p>
          </div>
        </header>

        <img
          src={cover || null}
          alt="Cover image"
          className="img"
          width="1000"
          height="300"
        />

        <div className="profile-edit">
          <img src={img} alt="" className="profile-img" />
          <Link className="edit-btn">Edit Profile</Link>
        </div>

        <div className="user-details">
          <div className="user-name">
            <h1 className="user-name">Denis</h1>
            <p className="user-handle">@den_is</p>
          </div>
          <div className="user-details_more">
            <div className="user-pair">
              <div className="user-location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <span>
                  <p>Mombasa</p>
                </span>
              </div>

              <Link to="/" className="followers">
                <span>120</span> Following
              </Link>
            </div>

            <div className="user-pair">
              <div className="user-join">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <span>
                  <p>Joined 29 Sept</p>
                </span>
              </div>

              <Link to="/" className="followers">
                <span>0</span> Followers
              </Link>
            </div>
          </div>
        </div>

        <nav className="user-cta">
          <ul className="user-cta_list">
            <li className="user-cta_item ">
              <Link className="user-cta_link">Tweets</Link>
            </li>
            <li className="user-cta_item">
              <Link className="user-cta_link">Replies</Link>
            </li>
            <li className="user-cta_item">
              <Link className="user-cta_link">Media</Link>
            </li>
            <li className="user-cta_item">
              <Link className="user-cta_link">Likes</Link>
            </li>
          </ul>
        </nav>

        <TweetCard />
        <TweetCard />
        <TweetCard />
      </section>
      <section className="left">
        <Follow />
        <Trending />
      </section>
    </main>
  );
};
