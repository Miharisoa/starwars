import { useDispatch } from "react-redux";
import { useState } from "react";

import { useNavigate, useSearchParams   } from "react-router-dom";
import { setObjectToDetails } from "../../redux/actions";

const ReadMore = ({text}) => {
  //const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 50) : text}
      <span onClick={toggleReadMore} className="read-or-hide text-info cursor-pointer">
        {isReadMore ? " read more..." : " show less"}
      </span>
    </p>
  );
};

function MovieItem({movie}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()

  const onClickMovie = () => {
    dispatch(setObjectToDetails(movie));
    return navigate('/details');
  }
  
  return (
    <div className="card">
      <div className="card-body">
        <a style={{color: "tomato", cursor: "pointer"}} onClick={onClickMovie}><h5>{movie.title}</h5></a>
        
        <ReadMore text={movie.opening_crawl} />
        
        <button className="btn btn-secondary btn-sm" onClick={onClickMovie}>See details</button>
      </div>
    </div>
  );
}

export default MovieItem;
