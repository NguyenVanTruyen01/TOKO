import React from 'react'
import styles from './styles/list-value-search.module.scss'

const ListValueSearch = () => {

  return (

    <div className={styles.mainList}>
      <span> Sort</span>
      <button className={styles.first}>Relevance</button>
      <button> Popular</button>
      <button>Most New</button>
      <button>
        Price
        <div className={styles.btnUpDown}>
          <i class="fas fa-sort-up"></i>
          <i class="fas fa-sort-down"></i>
        </div>
      </button>
      <button>
        Rating
        <div className={styles.btnUpDown}>
          <i class="fas fa-sort-up"></i>
          <i class="fas fa-sort-down"></i>
        </div>
      </button>
    </div>
  )
}

export default ListValueSearch