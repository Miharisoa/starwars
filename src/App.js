// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ marginLeft: "300px", overflowX: "hidden" }}>
        <div className="row">
          <div className="col-10 col-md-4 offset-md-4">
            <SearchBar />
          </div>
        </div>
        {/* <Menu /> */}
        {/* <Approutes /> */}
      </main>
    </div>
  );
}

export default App;
