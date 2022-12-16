import React from 'react'
import styles from './styles/footer.module.scss'
const Footer = () => {
  return (
    <div className={styles.footer} >
      <div className={styles.footerComponent}>
        <h3 className={styles.componentTitle}>
          CUSTOMER SUPPORT
        </h3>
        <ul>
          <li>
            Help center
          </li>
          <li>
            Safe Buying and Selling
          </li>
          <li>
            Contact Help
          </li>
        </ul>
      </div>

      <div className={styles.footerComponent}>
        <h3 className={styles.componentTitle}>
          OUR POLICIES
        </h3>
        <ul>
          <li>
            Privacy Policy
          </li>
          <li>
            Term of Use
          </li>
          <li>
            Term of Order
          </li>
        </ul>
      </div>

      <div className={styles.footerComponent}>
        <h3 className={styles.componentTitle}>
          ABOUT US
        </h3>
        <ul>
          <li className={styles.infoStudent}>
            <img src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9' />
            <div className={styles.content}>
              <div>Huynh Vy Khang</div>
              <small>20521433@gm.uit.edu.vn</small>
            </div>
          </li>
          <li className={styles.infoStudent}>
            <img src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9' />
            <div className={styles.content}>
              <div>Huynh Vy Khang</div>
              <small>20521433@gm.uit.edu.vn</small>
            </div>
          </li>
          <li className={styles.infoStudent}>
            <img src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316545669_168181822508943_4029988656363229819_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FOMnyQ8k3AcAX9www4P&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCnZ34ydi2adh35RILysICSrnhslzbB2jGeW7paS9LyPA&oe=63A000E9' />
            <div className={styles.content}>
              <div>Huynh Vy Khang</div>
              <small>20521433@gm.uit.edu.vn</small>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.footerComponent}>
        <h3 className={styles.componentTitle}>
          TOKO
        </h3>
        <ul>
          <li>
            Curious about new development and updates ? Follow our social media
          </li>
          <li className={styles.socialItem}>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-twitter"></i>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Footer;