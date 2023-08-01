import React from "react";

const SocialLink = (props) => {
  if (props.url) {
    return (
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.url}
      </a>
    );
  } else {
    return <p>{props.name || "Not Available"}</p>;
  }
};

const SocialInfo = (props) => {
  return (
    <div className={`social_info ${!props.name && "not-available"}`}>
      <img src={props.icon} alt="Icon" />
      <SocialLink url={props.url} name={props.name} />
    </div>
  );
};

export default SocialInfo;
