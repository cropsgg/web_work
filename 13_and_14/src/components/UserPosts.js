import React from "react";

function UserPosts() {
  const posts = [
    "This is my web assignment",
  ];

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h3>User Posts</h3>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {posts.map((post, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>{post}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserPosts;
