import React from "react";
import "./UserSocial.css";
import CompanyIcon from "../../assets/icon-company.svg";
import LocationIcon from "../../assets/icon-location.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import WebsiteIcon from "../../assets/icon-website.svg";

const UserSocial = ({ location, twitter_username, url, company }) => {
  return (
    <div className="social">
      <div className={location ? "social_info" : "social_info not-available"}>
        <img src={LocationIcon} alt="Location Icon" />
        <p>{location ? location : "Not Available"}</p>
      </div>
      <div
        className={
          twitter_username ? "social_info" : "social_info not-available"
        }
      >
        <img src={TwitterIcon} alt="Twitter Icon" />
        <p>{twitter_username ? twitter_username : "Not Available"}</p>
      </div>
      <div className={url ? "social_info" : "social_info not-available"}>
        <img src={WebsiteIcon} alt="Website Icon" />
        {url ? (
          <p href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </p>
        ) : (
          <p>Not Available</p>
        )}
      </div>
      <div className={company ? "social_info" : "social_info not-available"}>
        <img src={CompanyIcon} alt="Company Icon" />
        <p>{company ? company : "Not Available"}</p>
      </div>
    </div>
  );
};

UserSocial.defaultProps = {
  location: "Not provided",
  twitter_username: "Not provided",
  url: "#",
  company: "Not provided",
};

export default UserSocial;
