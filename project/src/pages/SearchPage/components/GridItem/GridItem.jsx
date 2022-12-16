import React from 'react'
import Cart from '../../../../component/Cart/Cart'
import styles from './styles/grid-item.module.scss'


const GridItem = () => {
  return (
    <>
      <div className={styles.gridItem}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        {/* <div className={styles.item}/>
        <div className={styles.item}/>
        <div className={styles.item}/>
        <div className={styles.item}/>
        <div className={styles.item}/>
        <div className={styles.item}/>
        <div className={styles.item}/>
        <div className={styles.item}/>
        <div className={styles.item}/> */}

      </div>
      <div className={styles.btn}>
        <button className={styles.loadmore}>Load More</button>
      </div>

    </>

  )
}

export default GridItem