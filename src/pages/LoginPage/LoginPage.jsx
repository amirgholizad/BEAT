import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
function LoginPage({ path }) {
  return (
    <div>
      <Login path={path} />
    </div>
  );
}

export default LoginPage;
