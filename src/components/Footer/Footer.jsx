import "./Footer.scss";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 BEAT. Created by AmirG. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
