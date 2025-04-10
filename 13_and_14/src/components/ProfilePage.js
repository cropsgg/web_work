import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

function ProfilePage() {
  return (
    <div style={{ width: "400px", margin: "auto", fontFamily: "Arial, sans-serif", padding: "20px", border: "1px solid black", borderRadius: "10px" }}>
      <ProfileImage />
      <UserInfo />
      <UserPosts />
    </div>
  );
}

export default ProfilePage;
