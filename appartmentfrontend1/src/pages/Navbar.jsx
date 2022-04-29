import { Link } from "react-router-dom";
import "./navbar.css";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const user = useSelector((state) => state.AuthReducer.loginUser);
  const removeLogin = () => {
    localStorage.removeItem("login_status");
  };
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
        {user ? (
          <Link to="/login">
            <Button onClick={removeLogin} variant="contained">
              logout
            </Button>
          </Link>
        ) : (
          <div>
            {" "}
            <Link to="/register">
              <Button id="loginbtn" variant="contained">
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="contained">login</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
