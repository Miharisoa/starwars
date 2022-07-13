// import logo from './logo.svg';
import "./App.css";
import Approutes from "./AppRoutes";
import Header from "./components/Header/Header";
import PageTitle from "./components/PageTitle/PageTitle";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ marginLeft: "300px", overflowX: "hidden" }}>
        <div className="row">
          <div className="col-12">
            <PageTitle />
          </div>
        </div>
        {/* <Menu /> */}
        <Approutes />
      </main>
    </div>
  );
}

export default App;
