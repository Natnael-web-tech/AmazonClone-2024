import React from 'react'
import styles from './Catagory.module.css'
import {Link} from 'react-Router'
function CatagoryCard({data}) {



  return (
    <div className={styles.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard
