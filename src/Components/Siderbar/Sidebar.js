import React from 'react';
import styles from './Sidebar.module.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import UserContext from '../../UserContext';

const Sidebar = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <span className={styles.logo}>Rh Gestão</span>
      </div>
      <hr />
      <div className={styles.center}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <DashboardIcon className={styles.icon} />
            <span className={styles.span}>Dashboard</span>
          </li>
          <li className={styles.li}>
            <VerifiedUserIcon className={styles.icon} />
            <span className={styles.span}>Socios</span>
          </li>
          <li className={styles.li}>
            <VerifiedUserIcon className={styles.icon} />
            <span className={styles.span}>Dashboard</span>
          </li>
          <li className={styles.li}>
            <VerifiedUserIcon className={styles.icon} />
            <span className={styles.span}>Dashboard</span>
          </li>
          <li className={styles.li}>
            <ExitToAppIcon className={styles.icon} />
            <span onClick={userLogout} className={styles.span}>
              Sair
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
