import { useHistory, useLocation, useParams } from "react-router-dom";

export default function UserPage() {
  const { search } = useLocation();
  let { id } = useParams();
  let urlParams = new URLSearchParams(search);
  console.log(urlParams.getAll("occupation"));

  return <div className='App'>User Page {id}</div>;
}
