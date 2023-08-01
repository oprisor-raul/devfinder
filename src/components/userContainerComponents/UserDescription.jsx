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
      {bio ? (
        <p className="bio">{bio}</p>
      ) : (
        <p className="bio not-available-bio">This profile has no bio</p>
      )}{" "}
    </div>
  );
};

export default UserDescription;
