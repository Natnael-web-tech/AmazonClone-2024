import React from 'react'
import styles from './Catagory.module.css'
function CatagoryCard({data}) {



  return (
    <div className={styles.catagory}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CatagoryCard
