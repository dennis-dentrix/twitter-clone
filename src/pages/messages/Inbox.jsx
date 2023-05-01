import profile from "../../assets/cover_image.png";
export const Inbox = () => {
  return (
    <section className="inbox-message">
      <div className="message-card active-message">
        <img src={profile || null} alt="" className="profile" />
        <div className="message-card__details">
          <div className="message-card__user">
            <p className="user-name">Denis kyu</p>
            <p className="user-handle">@den_is</p>
            <p className="tweet-time">. Apr 30</p>
          </div>
          <p className="message-card__msg">
            Lorem ipsum dolor sit amet consectetur ...
          </p>
        </div>
      </div>

      <div className="message-card">
        <img src={profile || null} alt="" className="profile" />
        <div className="message-card__details">
          <div className="message-card__user">
            <p className="user-name">Denis kyu</p>
            <p className="user-handle">@den_is</p>
            <p className="tweet-time">. Apr 30</p>
          </div>
          <p className="message-card__msg">
            Lorem ipsum dolor sit amet consectetur ...
          </p>
        </div>
      </div>
      <div className="message-card">
        <img src={profile || null} alt="" className="profile" />
        <div className="message-card__details">
          <div className="message-card__user">
            <p className="user-name">Denis kyu</p>
            <p className="user-handle">@den_is</p>
            <p className="tweet-time">. Apr 30</p>
          </div>
          <p className="message-card__msg">
            Lorem ipsum dolor sit amet consectetur ...
          </p>
        </div>
      </div>
    </section>
  );
};
