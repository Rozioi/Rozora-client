import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from '../assets/styles/Main.module.scss';
import {  useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import Chats from "./Chats";
const Layout: React.FC = () => {
  const inVisible = useSelector((state:RootState) => state.visibility.inVisible);
  return (
    <div className={styles['container']}>
      <Outlet />
      {inVisible && (<Chats />)}
      <Header />
    </div>
  );
};

export default Layout;
