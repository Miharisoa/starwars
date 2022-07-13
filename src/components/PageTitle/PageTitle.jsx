import { useSelector } from "react-redux";
function PageTitle() {
  const { title } = useSelector((state) => state.reducer);
  return <h1 className="mx-3 mt-3">{title.toUpperCase()}</h1>;
}
export default PageTitle;
