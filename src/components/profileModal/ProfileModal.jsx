import React from "react";
import "./ProfileModal.css";
import { Modal, useMantineTheme } from "@mantine/core";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  //   const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

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
              name="FirstName"
              placeholder="First Name"
            />

            <input
              type="text"
              className="infoInput"
              name="LastName"
              placeholder="Last Name"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="worksAT"
              placeholder="Works at"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="livesIn"
              placeholder="Lives In"
            />

            <input
              type="text"
              className="infoInput"
              name="Country"
              placeholder="Country"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Relationship Status"
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>
          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
};

export default ProfileModal;
