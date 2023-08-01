import React from "react";
import "./UserSocial.css";
import CompanyIcon from "../../assets/icon-company.svg";
import LocationIcon from "../../assets/icon-location.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import WebsiteIcon from "../../assets/icon-website.svg";
import SocialInfo from "./SocialInfo";

const UserSocial = ({ location, twitter_username, url, company }) => {
  return (
    <div className="social">
      <SocialInfo name={location} icon={LocationIcon} />
      <SocialInfo name={twitter_username} icon={TwitterIcon} />
      <SocialInfo url={url} icon={WebsiteIcon} />
      <SocialInfo name={company} icon={CompanyIcon} />
    </div>
  );
};

export default UserSocial;
