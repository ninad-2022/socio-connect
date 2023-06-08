import React, { useRef, useState } from "react";
import profileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import {
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
  UilScenery,
} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../action/UploadActions";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const loading = useSelector((state) => state.postReducer.uploading);
  const imageRef = useRef();

  const desc = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const onImageChange = (event) => {
    if (event?.target?.files && event?.target?.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt=""
      />
      <div>
        <input
          ref={desc}
          required
          className="text"
          placeholder="Whats's happening"
        />
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
          <button
            className="button ps-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading.." : "Share"}
          </button>
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
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
