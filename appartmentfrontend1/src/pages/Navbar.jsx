import { Link } from "react-router-dom";
import "./navbar.css";
import Button from "@mui/material/Button";

export const Navbar = () => {
  return (
    <div id="navbar126">
      <div>
        <Link to="/">
          <img
            id="nav_logo"
            src="https://w7.pngwing.com/pngs/914/291/png-transparent-house-real-estate-estate-agent-house-text-apartment-logo.png"
            alt=""
          />
        </Link>
      </div>
      <div>
        <h4>APPARTMENT MANAGER</h4>
      </div>
      <div id="btnlogn">
        <Link to="/login">
          <Button variant="contained">login</Button>
        </Link>
        <Link to="/register">
          <Button variant="contained">Register</Button>
        </Link>
      </div>
    </div>
  );
};
