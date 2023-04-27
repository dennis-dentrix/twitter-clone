import { Actions } from "./Actions";
import img from "../../../assets/profile_pic.jpg";
import "./tweet.css";
export const TweetCard = () => {
  return (
    <div className="tweet">
      {/* user profile pic */}
      <img src={img} alt="Profile picture" className="profile" />
      <div className="tweet-user">
        <div className="user">
          {/* user name and user handle */}
          <div className="user-account">
            <p className="user-name">Denis kyu</p>
            <p className="user-handle">@den_is</p>
          </div>
          {/* time elapsed since post */}
          <p className="tweet-time">13h</p>
        </div>
        {/* user tweet */}
        <p className="tweet-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
          dicta sint! At id vel obcaecati.
        </p>
        <div className="tweet-extras">
          <img src={img} alt="" className="tweet-img" />
          <Actions />
        </div>
      </div>
    </div>
  );
};
