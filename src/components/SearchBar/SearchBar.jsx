import React from "react";
import { useSelector } from "react-redux";

function SearchBar() {
  const { title } = useSelector((state) => state.reducer);
  return (
    <div className="input-group mb-3 my-5 my-md-4">
        <input type="text" className="form-control" placeholder={"Search "+ title+" here"} />
        <div className="input-group-prepend">
            <span className="input-group-text cursor-pointer" onClick={()=> alert('search')}>Search</span>
            {/* <button className="btn btn-primary">Search</button> */}
        </div>
    </div>
  );
}

export default SearchBar;
