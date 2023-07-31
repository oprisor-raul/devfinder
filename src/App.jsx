import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import SearchBar from "./components/searchbar/SearchBar";

function App() {
  return (
    <Main>
      <Header />
      <SearchBar />
    </Main>
  );
}

export default App;
