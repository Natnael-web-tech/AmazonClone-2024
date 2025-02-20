import React from "react";
import { Link } from "react-router";
import {FaSearch} from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";
import { GrLocation } from "react-icons/gr";
import styles from "./Header.module.css";
import AmazonLogo from '../../assets/amazon_PNG11.png'
import USAflag from '../../assets/united-states.png'
import LowerHeader from "./LowerHeader";

const Header = () => {
  const [cartItems] = React.useState(3); // Example cart items count

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            <img src={AmazonLogo} alt="Amazon" className={styles.logoImage} />
          </Link>
          <div className={styles.deliveryInfo}>
            <GrLocation size="3vh" className={styles.LocationIcon} />
            <div className={styles.deliveryText}>
              <p className={styles.deliveryLabel}>Deliver to</p>
              <span className={styles.deliveryLocation}>USA</span>
            </div>
          </div>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.searchSelect}>
            <select name="" id="">
              <option>All</option>
            </select>
          </div>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search Amazon"
          />
          <button className={styles.searchButton}>
            <FaSearch className={styles.searchIcon} />
          </button>
        </div>

        <div className={styles.navItems}>
          <div className={styles.navItem}>
            <div className={styles.languageSelector}>
              <img src={USAflag} alt="USA flag" className={styles.flagImage} />
              <span>EN</span>
              <TiArrowSortedDown
                color="gray"
                className={styles.DOwnArrowIcon}
              />
            </div>
          </div>
          <div className={styles.navItem}>
            <Link className="my-Link" to="/auth">
              <span className={styles.navLineOne}>Hello, Sign in</span>
              <br />
              <span className={styles.navLineTwo}>Account & Lists</span>
              <TiArrowSortedDown
                color="gray"
                className={styles.DOwnArrowIconLists}
              />
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link className="my-Link" to="/orders">
              <span className={styles.navLineOne}>Returns</span>
              <br />
              <span className={styles.navLineTwo}>& Orders</span>
            </Link>
          </div>
          <div className={styles.cart}>
            <Link className="my-Link" to="/cart">
              <BiCart className={styles.cartIcon} />
              <span className={styles.cartCount}>{cartItems}</span>
              <span className={styles.cartText}>Cart</span>
            </Link>
          </div>
        </div>
      </div>

      <nav>
        <LowerHeader />
      </nav>
    </header>
  );
};

export default Header;
