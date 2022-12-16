import React from 'react'
import styles from './styles/category.module.scss'
import { NavLink } from "react-router-dom"

const Category = () => {

    return (
        <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Shop by Category</h3>
            <ul className={styles.categoryContent}>

                <li className={styles.categoryItem}>
                    <img className={styles.categoryImg}
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9" />
                    <div className={styles.categoryName}>Vehicle</div>
                </li>

                <li className={styles.categoryItem}>
                    <img className={styles.categoryImg}
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9" />
                    <div className={styles.categoryName}>Electronic</div>
                </li>

                <li className={styles.categoryItem}>
                    <img className={styles.categoryImg}
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9" />
                    <div className={styles.categoryName}>Furniture</div>
                </li>

                <li className={styles.categoryItem}>
                    <img className={styles.categoryImg}
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9" />
                    <div className={styles.categoryName}>Entertainment</div>
                </li>

                <li className={styles.categoryItem}>
                    <img className={styles.categoryImg}
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9" />
                    <div className={styles.categoryName}>Mom &amp; Baby</div>
                </li>

                <li className={styles.categoryItem}>
                    <img className={styles.categoryImg}
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9" />
                    <div className={styles.categoryName}>Pet</div>
                </li>

                <li className={styles.categoryItem}>
                    <img className={styles.categoryImg}
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9" />
                    <div className={styles.categoryName}>Food</div>
                </li>

                <li className={styles.categoryItem}>
                    <img className={styles.categoryImg}
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9" />
                    <div className={styles.categoryName}>Fashion</div>
                </li>

                <li className={styles.categoryItem}>
                    <img className={styles.categoryImg}
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9" />
                    <div className={styles.categoryName}>Appliance</div>
                </li>

                <li className={styles.categoryItem}>
                    <img className={styles.categoryImg}
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9" />
                    <div className={styles.categoryName}>Office supplices</div>
                </li>
            </ul>
        </div>
    )
}

export default Category