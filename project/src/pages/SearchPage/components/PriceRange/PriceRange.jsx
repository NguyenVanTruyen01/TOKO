import React from 'react'
import styles from './styles/price-range.module.scss'
const PriceRange = () => {
    return (
        <div className={styles.priceRange}>
            <div className={styles.title}>
                <h3> Price Range</h3>
            </div>
            <div className={styles.minimun}>
                <div className={styles.mainminimun}>
                    <p>Minimum</p>
                </div>
            </div>
            <div className={styles.money}>
                <div className={styles.mainmoney}>
                    <p>4.000.000 VND</p>
                </div>

            </div>
        </div>
    )
}

export default PriceRange