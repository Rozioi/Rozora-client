import React from "react";
import { CgProfile } from "react-icons/cg";
import { PiChatsTeardropBold } from "react-icons/pi";
import { MdAddAPhoto } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoIosSettings, IoMdInformationCircleOutline } from "react-icons/io";
import styles from "../assets/styles/Header.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { toggleVisibility } from "../Redux/slices/VisibilitySlice";

const Header: React.FC = () => {
  const inVisible = useSelector((state:RootState) => state.visibility.inVisible);
  const dispatch = useDispatch();
  return (
    <div className={styles.Header}>
      
      <div className={styles['button-list']}>
        <NavLink to="/" className={({isActive}) => isActive ? styles['button-active']  : styles.button}>
          <CgProfile />
        </NavLink>
        <button
          className={inVisible  ? styles['button-active'] : styles.button}
          onClick={() => dispatch(toggleVisibility())}
        >
         <PiChatsTeardropBold />
        </button>
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