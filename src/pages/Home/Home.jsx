import loop from "./loop.gif";
function Home(params) {
  return (
    <div className="row px-5">
      <p>
      Lord Vader's spies are everywhere! Let's go thwart their plans.
      </p>
      <div className="col-12 col-md-6 offset-md-3">
        <img src={loop} />
      </div>
    </div>
  );
}

export default Home;
