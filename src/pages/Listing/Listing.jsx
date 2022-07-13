import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setObjectToDetails, setTitle } from "../../redux/actions";
import MovieItem from "../../components/MovieItem/MovieItem";
import SearchBar from "../../components/SearchBar/SearchBar";

function Listing(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { movies, peoples, species, planets, starships, vehicles } =
    useSelector((state) => state.reducer);

  const [listTitle, setListTitle] = useState("");
  const [currentObject, setCurrentObject] = useState(null);

  const onSelect = (element) => {
    dispatch(setObjectToDetails(element));
    return navigate("/details");
  };

  useEffect(() => {
    const title = searchParams.get("category");

    switch (title) {
      case "films":
        console.log("MOVIES >>> ", movies);
        break;
      case "people":
        console.log("peoples >>> ", peoples);
        break;
      case "species":
        console.log("species >>> ", species);
        break;
      case "starships":
        console.log("starships >>> ", starships);
        break;
      case "vehicles":
        console.log("vehicles >>> ", vehicles);
        break;
      case "planets":
        console.log("planets >>> ", planets);
        break;
      default:
        return "";
    }
    setListTitle(title);
  }, [searchParams]);

  useEffect(() => {}, [currentObject]);

  return (
    <div className="row px-4">
      <div className="col-12 col-md-6 offset-md-3">
        <SearchBar />
      </div>
      {listTitle === "films" &&
        movies.map((e) => (
          <div className="col-md-4 p-2">
            <MovieItem movie={e} />
          </div>
        ))}
      {listTitle === "people" && (
        <ListPeople list={peoples} onClickButton={onSelect} />
      )}
      {listTitle === "planets" && (
        <ListPlanets list={planets} onClickButton={onSelect} />
      )}
      {listTitle === "species" && (
        <ListSpecies list={species} onClickButton={onSelect} />
      )}
      {listTitle === "starships" && (
        <ListStarships list={starships} onClickButton={onSelect} />
      )}
      {listTitle === "vehicles" && (
        <ListVehicles list={vehicles} onClickButton={onSelect} />
      )}
    </div>
  );
}

export const ListPeople = ({ list, onClickButton }) => {
  return (
    <div className="row">
      {list.map((e) => (
        <div className="col-md-4 p-2" key={e.name}>
          <div className="card">
            <div className="card-body">
              <a onClick={() => onClickButton(e)} style={{color: "tomato", cursor: "pointer"}}>
                <h5>{e.name}</h5>
              </a>

              <p>Genre: {e.gender}</p>

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => onClickButton(e)}
              >
                See details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ListSpecies = ({ list, onClickButton }) => {
  return (
    <div className="row">
      {list.map((e) => (
        <div className="col-md-4 p-2" key={e.name}>
          <div className="card">
            <div className="card-body">
              <a onClick={() => onClickButton(e)} style={{color: "tomato", cursor: "pointer"}}>
                <h5>{e.name}</h5>
              </a>

              <p>Classification: {e.classification}</p>

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => onClickButton(e)}
              >
                See details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ListPlanets = ({ list, onClickButton }) => {
  return (
    <div className="row">
      {list.map((e) => (
        <div className="col-md-4 p-2" key={e.name}>
          <div className="card">
            <div className="card-body">
              <a onClick={() => onClickButton(e)} style={{color: "tomato", cursor: "pointer"}}>
                <h5>{e.name}</h5>
              </a>

              <p>Population: {e.population}</p>

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => onClickButton(e)}
              >
                See details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ListStarships = ({ list, onClickButton }) => {
  return (
    <div className="row">
      {list.map((e) => (
        <div className="col-md-4 p-2" key={e.name}>
          <div className="card">
            <div className="card-body">
              <a onClick={() => onClickButton(e)} style={{color: "tomato", cursor: "pointer"}}>
                <h5>{e.name}</h5>
              </a>

              <p>Manufacturer: {e.manufacturer}</p>

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => onClickButton(e)}
              >
                See details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ListVehicles = ({ list, onClickButton }) => {
  return (
    <div className="row">
      {list.map((e) => (
        <div className="col-md-4 p-2" key={e.name}>
          <div className="card">
            <div className="card-body">
              <a onClick={() => onClickButton(e)} style={{color: "tomato", cursor: "pointer"}}>
                <h5>{e.name}</h5>
              </a>

              <p>Manufacturer: {e.manufacturer}</p>

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => onClickButton(e)}
              >
                See details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
