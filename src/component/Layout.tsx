import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from '../assets/styles/Main.module.scss';
const Layout: React.FC = () => {
  return (
    <div className={styles['container']}>
      <Outlet />
      <Header />
    </div>
  );
};

export default Layout;
