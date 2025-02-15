import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
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
      <button className="button--reverse">LOGOUT</button>
    </header>
  );
}

export default Header;
