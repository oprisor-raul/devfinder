import React from "react";
import "./UserStats.css";

const UserStats = ({ public_repos, followers, following }) => {
  return (
    <div className="user-stats">
      <div className="user-stats__stat">
        <h6>Repos </h6> <p> {public_repos}</p>
      </div>
      <div className="user-stats__stat">
        <h6>Followers </h6> <p> {followers}</p>
      </div>
      <div className="user-stats__stat">
        <h6>Following </h6> <p> {following}</p>
      </div>
    </div>
  );
};

UserStats.defaultProps = {
  public_repos: 14,
  followers: 69,
  following: 0,
};

export default UserStats;
