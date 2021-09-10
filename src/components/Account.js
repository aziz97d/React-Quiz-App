import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../style/Account.module.css";

const Account = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      {currentUser ? (
        <>
          <span>{currentUser.displayName}</span>
          <span class="material-icons-outlined" title="Logout" onClick={logout}>
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </div>
  );
};

export default Account;
