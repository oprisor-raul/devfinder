import React, { Fragment, useContext } from "react";
import { UserContext } from "./UserProvider";
import UserDescription from "../userContainerComponents/UserDescription";
import UserStats from "../userContainerComponents/UserStats";
import UserSocial from "../userContainerComponents/UserSocial";
import "./DevUserContainer.css";

const DevUserContent = () => {
  const { user, loading, error } = useContext(UserContext);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error"> No results</p>;
  }

  if (!user) {
    return <p> No user</p>;
  }

  return (
    <>
      <UserDescription
        avatar_url={user.avatar_url}
        name={user.name}
        login={user.login}
        created_at={user.created_at}
        bio={user.bio}
      />
      <UserStats
        public_repos={user.public_repos}
        followers={user.followers}
        following={user.following}
      />
      <UserSocial
        location={user.location}
        twitter_username={user.twitter_username}
        url={user.url}
        company={user.company}
      />
    </>
  );
};

export default DevUserContent;
