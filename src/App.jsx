import "./App.css";
import Header from "./components/header/Header";
import Providers from "./components/main/Providers";
import SearchBar from "./components/searchbar/SearchBar";
import DevUser from "./components/user/DevUser";
import { useContext } from "react";
import { UserContext } from "./components/user/UserProvider";

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

function App() {
  return (
    <Providers>
      <AppController />
    </Providers>
  );
}

export default App;
