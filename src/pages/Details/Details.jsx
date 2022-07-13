import { useSelector } from "react-redux";

// import loop from "./loop.gif";
function Details(params) {
  const { currentObject } = useSelector((state) => state.reducer);
  console.log(currentObject);
  return (
    <div className="row p-5">
      <h5>{currentObject && currentObject.name }</h5>
      <h5>{currentObject && currentObject.title }</h5>
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
