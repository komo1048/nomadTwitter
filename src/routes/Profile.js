import React, { useEffect, useState } from "react";
import { authService, dbService } from "../fBase";

const Profile = ({ userObj, refreshUser }) => {
  const onLogOutClick = () => authService.signOut();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const getMyNweets = async () => {
    const nweets = await dbService
      .collection("nweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt", "desc")
      .get();
  };
  useEffect(() => {
    getMyNweets();
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display name"
          onChange={onChange}
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};

export default Profile;
