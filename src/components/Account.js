import React from 'react';
import classes from "../styles/Account.module.css";
import { Link } from 'react-router-dom';

const loadIconFont = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

export default function Account() {
  React.useEffect(() => {
    loadIconFont();
  }, []);

  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
