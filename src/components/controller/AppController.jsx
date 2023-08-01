import { useContext } from "react";
import { UserContext } from "../user/UserProvider";
import Header from "../header/Header";
import SearchBar from "../searchbar/SearchBar";
import DevUser from "../user/DevUser";

const AppController = () => {
  const { fetchUser } = useContext(UserContext);

  return (
    <>
      <Header />
      <SearchBar onSearch={fetchUser} />
      <DevUser />
    </>
  );
};

export default AppController;
