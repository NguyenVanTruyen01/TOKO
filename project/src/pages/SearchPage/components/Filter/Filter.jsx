import React from 'react'
import styles from './styles/filter.module.scss'
const Filter = () => {
  return (
    <div className={styles.filter}>
        <div className={styles.title}>
            <h3>Filter</h3>
        </div>
        <div className={styles.btn}>
            <button>Reset</button>
        </div>
        
    </div>
  )
}

export default Filter