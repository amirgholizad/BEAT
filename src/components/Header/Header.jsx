import "./Header.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const access_token = sessionStorage.getItem("token");
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    window.location.href = "/";
  };
  const handleLogin = () => {
    navigate("/login");
  };

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          {" "}
          <h1 className="header__logo">BEAT</h1>
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/">
              <button className="button">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/docs">
              <button className="button">Docs</button>
            </Link>
          </li>
          <li>
            <Link to="/policy">
              <button className="button">Policy</button>
            </Link>
          </li>
        </ul>
      </nav>
      {access_token ? (
        <button className="button--reverse" onClick={handleLogout}>
          LOGOUT
        </button>
      ) : (
        <Link to="/login">
          <button className="button--reverse" onClick={handleLogin}>
            LOGIN
          </button>
        </Link>
      )}
    </header>
  );
}

export default Header;
