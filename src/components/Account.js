import React from 'react';
import classes from "../styles/Account.module.css";

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
      <a href="signup.html">Signup</a>
    </div>
  );
}
