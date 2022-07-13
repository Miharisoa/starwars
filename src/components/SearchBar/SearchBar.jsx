import React from "react";

function SearchBar() {
  return (
    <div className="input-group mb-3 my-5 my-md-4">
        <input type="text" className="form-control" placeholder="Rechercher ici..." />
        <div className="input-group-prepend">
            <span className="input-group-text cursor-pointer" onClick={()=> alert('search')}>Rechercher</span>
            {/* <button className="btn btn-primary">Search</button> */}
        </div>
    </div>
  );
}

export default SearchBar;
