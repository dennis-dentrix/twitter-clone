import { Trends } from "../components/Elements/Topics/Trends";
import { Follow } from "../components/Elements/Topics/Follow";
export const Explore = () => {
  return (
    <main className="main">
      <div className="center">
        <Trends />
      </div>
      <div className="left">
        <Follow />
      </div>
    </main>
  );
};
