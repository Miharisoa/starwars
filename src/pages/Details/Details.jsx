import { useSelector } from "react-redux";

// import loop from "./loop.gif";
function Details(params) {
  const { currentObject } = useSelector((state) => state.reducer);
  console.log(currentObject);
  return (
    <div className="row px-5">
      <h1>DETAILS</h1>
      <div className="card">
        {currentObject && (
          <div className="card-body">
            {Object.keys(currentObject).map((key) => {
              return (
                !Array.isArray(currentObject[key]) &&
                key !== "url" && (
                  <p>
                    {key.toUpperCase()} : {currentObject[key]}
                  </p>
                )
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
