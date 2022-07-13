import loop from "./loop.gif";
function Home(params) {
  return (
    <div className="row px-5">
      <h6 className="text-center">
      Lord Vader's spies are everywhere! Let's go thwart their plans.
      </h6>
      <div className="col-12 col-md-6 offset-md-3">
        <img src={loop} />
      </div>
    </div>
  );
}

export default Home;
