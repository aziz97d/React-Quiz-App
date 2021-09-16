import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../style/Nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    <nav class={classes.nav}>
      <ul>
        <li>
          <Link to="/" class={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>

      <Account />
    </nav>
  );
};

export default Nav;
