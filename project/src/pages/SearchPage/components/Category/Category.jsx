import React from 'react'
import styles from './styles/category.module.scss'
const Category = () => {
  return (
    <div className={styles.category}>
        <div className={styles.title}>
            <h3> Categories</h3>
        </div>
        <div className={styles.list}>
            <ul>
               <li className={styles.listTitle}>
                    <i class="fa-solid fa-chevron-right"></i> &nbsp; Vehicle
                    <ul className={styles.listChild}>
                        <li> <input type={"checkbox"} />&nbsp; &nbsp; &nbsp; All</li>
                        <li> <input type={"checkbox"} />&nbsp; &nbsp; &nbsp; MotoBike</li>
                        <li> <input type={"checkbox"} />&nbsp; &nbsp; &nbsp; Van</li>
                        <li> <input type={"checkbox"} />&nbsp; &nbsp; &nbsp; Electric Bike</li>
                        <li> <input type={"checkbox"} />&nbsp; &nbsp; &nbsp; Bike</li>
                        <li> <input type={"checkbox"} />&nbsp; &nbsp; &nbsp; Orther Vehicle</li>
                        <li> <input type={"checkbox"} />&nbsp; &nbsp; &nbsp; Spare Parts</li>
                        <li> <input type={"checkbox"} />&nbsp; &nbsp; &nbsp; Car</li>
                    </ul>
                </li> 
               <li className={styles.listTitle}><i class="fa-solid fa-chevron-right"></i> &nbsp; Electronic</li> 
               <li className={styles.listTitle}> <i class="fa-solid fa-chevron-right"></i> &nbsp;  Funiture</li> 
               <li className={styles.listTitle}><i class="fa-solid fa-chevron-right"></i> &nbsp; Mon & Baby</li> 
               <li className={styles.listTitle}><i class="fa-solid fa-chevron-right"></i> &nbsp; Pet</li> 
               <li className={styles.listTitle}><i class="fa-solid fa-chevron-right"></i> &nbsp; Food</li> 
               <li className={styles.listTitle}><i class="fa-solid fa-chevron-right"></i> &nbsp; Fashion</li> 
               <li className={styles.listTitle}><i class="fa-solid fa-chevron-right"></i> &nbsp; Applican</li> 
               <li className={styles.listTitle}><i class="fa-solid fa-chevron-right"></i> &nbsp; Office supplices</li> 
            </ul>
        </div>
       
    </div>
  )
}

export default Category