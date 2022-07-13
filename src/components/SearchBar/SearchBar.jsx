import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/actions";

function SearchBar() {
  const { title } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const onHangleChange = (e) => {
    setText(e.target.value);
  };

  const onSearch = () => {
    dispatch(search(title, text));
  }

  return (
    <div className="input-group mb-3 my-5 my-md-4">
      <input
        type="text"
        className="form-control"
        placeholder={"Search " + title + " here"}
        onChange={onHangleChange}
        value={text}
      />
      <div className="input-group-prepend">
        <span
          className="input-group-text cursor-pointer"
          onClick={() => onSearch()}
        >
          Search
        </span>
        {/* <button className="btn btn-primary">Search</button> */}
      </div>
    </div>
  );
}

export default SearchBar;
