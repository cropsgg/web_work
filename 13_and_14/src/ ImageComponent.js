import React from "react";  
import srcImage from "./Images/myimg.jpg";  

function ImageComponent() {  
  return (  
    <div>  
      <h2>Image from Public Folder</h2>  
      <img src={`${process.env.PUBLIC_URL}/Images/myimg.jpg`} alt="Public Folder Image" width="300" />  
      <h2>Image from Src Folder</h2>  
      <img src={srcImage} alt="Src Folder Image" width="300" />  
    </div>  
  );  
}  

export default ImageComponent;  