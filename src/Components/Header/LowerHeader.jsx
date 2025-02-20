
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import styles from './Header.module.css'
import { Link } from "react-router";


function LowerHeader() {
return (
  <div className={styles.bottomRow}>
    <Link className='my-Link'>
      <ul>
        <li>
          <AiOutlineMenu className="LowerSelector" />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </Link>
  </div>
);
}

export default LowerHeader