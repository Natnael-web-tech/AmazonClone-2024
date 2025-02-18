import React from 'react'
import {CatagoryInfos} from './CatagoryInfo.js'
import CatagoryCard from './CatagoryCard'
import styles from './Catagory.module.css'



function Catagory() {
  return (
    <div className={styles.catagoryWrapper}>
     {

     CatagoryInfos?.map((infos, index)=> {
        return <CatagoryCard key={index} data= {infos} />
     })   
     }
    </div>
  )
}

export default Catagory
