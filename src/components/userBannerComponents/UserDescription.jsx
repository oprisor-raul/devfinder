import React from "react";
import "./UserDescription.css";

const UserDescription = ({ avatar_url, name, login, created_at, bio }) => {
  return (
    <div className="user-description">
      <div className="user-details">
        <img className="avatar" src={avatar_url} alt={name} />
        <div className="info">
          <h2>{name}</h2>
          <h3>@{login}</h3>
          <p>
            Joined{" "}
            {new Date(created_at).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <p className="bio">{bio}</p>
    </div>
  );
};

UserDescription.defaultProps = {
  avatar_url: "https://avatars.githubusercontent.com/u/4853930?v=4",
  name: "Dominik Knoll",
  login: "djknoll",
  created_at: "2013-06-27T17:39:07Z",
  bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros",
};

export default UserDescription;
