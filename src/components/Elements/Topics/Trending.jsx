import { Trends } from "./Trends";
import { Follow } from "./Follow";

import "./Trending.css";

export const Trending = () => {
  return (
    <section className="trending">
      <Trends />
      <Follow />
      <footer className="footer">Footer</footer>
    </section>
  );
};
