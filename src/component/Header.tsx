import React from "react";
import { CgProfile } from "react-icons/cg";
import { PiChatsTeardropBold } from "react-icons/pi";
import { MdAddAPhoto } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoIosSettings, IoMdInformationCircleOutline } from "react-icons/io";
import styles from "../assets/styles/Header.module.scss";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <div className={styles['button-list']}>
        <NavLink to="/" className={({isActive}) => isActive ? styles['button-active']  : styles.button}>
          <CgProfile />
        </NavLink>
        <NavLink to="/chats"  className={({isActive}) => isActive ? styles['button-active']  : styles.button}>
          <PiChatsTeardropBold />
        </NavLink>
        <NavLink to="/add-photo"  className={({isActive}) => isActive ? styles['button-active']  : styles.button}>
          <MdAddAPhoto />
        </NavLink>
        <NavLink to="/search"  className={({isActive}) => isActive ? styles['button-active']  : styles.button}>
          <FaSearch />
        </NavLink>
        <NavLink to="/settings"  className={({isActive}) => isActive ? styles['button-active'] : styles.button}>
          <IoIosSettings />
        </NavLink>
        <NavLink to="/info"  className={({isActive}) => isActive ? styles['button-active']  : styles.button}>
          <IoMdInformationCircleOutline />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;