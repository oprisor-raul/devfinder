import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../user/UserProvider";
import Header from "../header/Header";
import SearchBar from "../searchbar/SearchBar";
import DevUserContent from "../user/DevUserContent";

const AppContainer = () => {
  const { fetchUser } = useContext(UserContext);

  useEffect(() => {
    fetchUser("oprisor-raul");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <SearchBar onSearch={fetchUser} />
      <div className="user-container">
        <DevUserContent />
      </div>
    </>
  );
};

export default AppContainer;
