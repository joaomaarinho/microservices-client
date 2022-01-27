import React from "react";

import PostCreate from "./component/PostCreate";
import PostList from "./component/PostList";

function App() {
  return (
      <div className="container">
        <h1>Blog App</h1>
        <PostCreate />
        <hr />
        <h1>POSTS</h1>
        <PostList />
      </div>
  );
}

export default App;
