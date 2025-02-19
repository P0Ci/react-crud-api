import { Routes, Route } from "react-router-dom";

import Home from "../views/home";
import PostIndex from "../views/posts";
import PostCreate from "../views/posts/create";
import PostEdit from "../views/posts/edit";

function RouteIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostIndex />} />
      <Route path="/posts/create" element={<PostCreate />} />
      <Route path="/posts/edit/:id" element={<PostEdit />} />
    </Routes>
  );
}

export default RouteIndex;
