import React, { useState } from "react";
import "./ProfileModal.css";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
  //   const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={modalOpened}
        size="55%"
        onClose={() => setModalOpened(false)}
      >
        <form action="" className="infoForm">
          <h3>Info Form</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />

            <input
              type="text"
              className="infoInput"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="worksAt"
              placeholder="Works at"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="livesin"
              placeholder="Lives In"
              onChange={handleChange}
            />

            <input
              type="text"
              className="infoInput"
              name="country"
              placeholder="Country"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Relationship Status"
              onChange={handleChange}
              name="relationship"
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImage" />
            Cover Image
            <input type="file" name="coverImage" />
          </div>
          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
};

export default ProfileModal;
