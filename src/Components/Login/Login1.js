import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserContext from '../../UserContext';
import Login from './Login';
import styles from './Login.module.css';

const Login1 = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login1;
