import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const DevUser = () => {
  const { user, loading, error } = useContext(UserContext);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {user && (
        <div>
          <h1>{user.name}</h1>
          <img src={user.avatar_url} alt={user.name} />
        </div>
      )}
    </div>
  );
};

export default DevUser;
