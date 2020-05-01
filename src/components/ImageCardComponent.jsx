import React from "react";
import "../assets/styles/Site.scss";

export default function ImageCardComponent(image) {
  return (
    <div className="gallery_item">
      <div className="h_gallery_item">
        <img src={image.image} alt="" />
        <div className="hover">
          <a className="light" onClick={image.openClick.bind(image)}>
            <i className="fa fa-expand" id={image.id}></i>
          </a>
        </div>
      </div>
    </div>
  );
}
