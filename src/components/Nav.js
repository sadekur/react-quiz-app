// import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
          <img src={logo} alt="Learn with SRS Logo" />
            <h3>Take with SRS</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
