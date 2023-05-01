import { Routes, Route } from "react-router-dom";
import { Home, Explore, Profile, Message } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Message />} />
    </Routes>
  );
};
