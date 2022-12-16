import React from 'react'
import styles from './styles/header.module.scss'
import { NavLink } from "react-router-dom"

const Header = () => {



    return (
        <div className={`${styles.header} container item-btw`} >
            <div className={styles.logo}>
                <h2>TOKO</h2>
            </div>
            <div className={styles.menu}>
                <div className={`${styles.item} ${styles.active}`}>
                    <span><i class="fa-solid fa-house-user" /></span>
                    <span>HOME</span>
                </div>
                <div className={styles.item}>
                    <span><i class="fa-solid fa-address-card"></i></span>
                    <span>POST</span>
                </div>
                <div className={styles.item}>
                    <span><i class="fa-sharp fa-solid fa-comments"></i></span>
                    <span>CHAT</span>
                </div>
                <div className={styles.item}>
                    <span><i class="fa-solid fa-bell"></i></span>
                    <span>NOTIFICATION</span>
                </div>
            </div>
            <div className={styles.account}>
                <div className={styles.info}>
                    <div className={styles.avata}>
                        <div className={styles.img} />
                    </div>
                    <div className={styles.name}>
                        <p className={styles.pro}>Khang Huynh</p>
                        <p className={styles.mail}>hduykhang01@gmail.com</p>
                    </div>
                </div>
                <div className={styles.upload}>
                    <button>Upload</button>
                </div>
            </div>

        </div>
    )
}

export default Header