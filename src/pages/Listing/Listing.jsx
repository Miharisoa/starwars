import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTitle } from "../../redux/actions";

function Listing() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { title, movies, peoples, species, planets, starships } = useSelector(
    (state) => state.reducer
  );

  useEffect(() => {
    console.log("searchParams >>> ", searchParams);
    if (searchParams) {
      console.log(searchParams.get("category"));
    }

    console.log('MOVIES >>> ', movies);
    console.log('peoples >>> ', peoples);
    console.log('species >>> ', species);
    console.log('planets >>> ', planets);
    console.log('starships >>> ', starships);
    // const newTitle = searchParams.le
    // dispatch(setTitle('nouveau'));
  }, []);

  return (
    <div>
      <h1>LISTING</h1>
    </div>
  );
}

export default Listing;
