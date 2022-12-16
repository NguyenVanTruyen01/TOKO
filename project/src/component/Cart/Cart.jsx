import React from 'react'
import styles from './styles/cart.module.scss'

const Cart = () => {
  return (

    <div className={styles.cart}>
      <div className={styles.image} />
      <div className={styles.icon}>
        <i class="fa-solid fa-heart"></i>
      </div>
      <div className={styles.title}>
        <h3 className={styles.nameProduct}>Honda Wave Alpha 110</h3>
        <p className={styles.addressProduct}>Districts 7,HCM</p>
        <p className={styles.priceProduct}> 35.000.000 VND</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.author}>
        <div className={styles.image}>

        </div>
        <div className={styles.createby}>
          Khang Huynh
        </div>
      </div>
    </div>
  )
}

export default Cart