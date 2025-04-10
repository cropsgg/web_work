import React from "react";
import myimg from "../Images/myimg.jpg"
function ProfileImage() {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <img 
        src={myimg} 
        alt="Profile" 
        style={{ borderRadius: "50%", width: "150px", height: "150px" }} 
      />
    </div>
  );
}

export default ProfileImage;
