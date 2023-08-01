import React from "react";
import "./UserBanner.css";
import UserDescription from "../userBannerComponents/UserDescription";
import UserStats from "../userBannerComponents/UserStats";
import UserSocial from "../userBannerComponents/UserSocial";

const UserBanner = ({ user }) => {
  return (
    <div className="user-banner">
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
    </div>
  );
};

UserBanner.defaultProps = {
  user: {
    login: "djknoll",
    avatar_url: "https://avatars.githubusercontent.com/u/4853930?v=4",
    html_url: "https://github.com/djknoll",
    name: "Dominik Knoll",
    company: null,
    blog: "https://djknoll.github.io/",
    location: null,
    email: null,
    hireable: null,
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros",
    twitter_username: "elonmusk",
    public_repos: 69,
    public_gists: 2,
    followers: 5,
    following: 0,
    created_at: "2013-06-27T17:39:07Z",
    updated_at: "2023-07-31T00:42:57Z",
    url: "https://api.github.com/users/djknoll",
  },
};

export default UserBanner;
