import React, { useRef, useState } from "react";
import profileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={profileImage} alt="" />
      <div>
        <input className="text" placeholder="Whats's happening" />
        <div className="postOptions">
          <div
            className="options"
            onClick={() => imageRef.current.click()}
            style={{ color: "var(--photo)" }}
          >
            <UilScenery />
            Photo
          </div>
          <div className="options" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="options" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="options" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
