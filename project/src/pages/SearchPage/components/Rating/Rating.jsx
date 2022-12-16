import React from 'react'
import styles from './styles/rating.module.scss'
const Rating = () => {
  return (
    <div className={styles.rating}>
        <div className={styles.title}>
            <h3> Rating</h3>
        </div>
        <div className={styles.mainStar}>
            <div className={styles.checkbox}>
                <input type={"checkbox"}/>
            </div>
            <div className={styles.star}>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span className={styles.spec}>above</span>
            </div>
        </div>
    </div>
  )
}

export default Rating