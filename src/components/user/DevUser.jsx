import React, { useContext } from "react";
import { UserContext } from "./UserProvider";
import UserBannerLoading from "../userBanner/UserBannerLoading";
import UserBanner from "../userBanner/UserBanner";

const DevUser = () => {
  const { user, loading, error } = useContext(UserContext);
  return (
    <div>
      {loading ? (
        <UserBannerLoading />
      ) : error ? (
        <UserBanner />
      ) : user ? (
        <UserBanner user={user} />
      ) : (
        <UserBanner />
      )}
    </div>
  );
};

export default DevUser;
