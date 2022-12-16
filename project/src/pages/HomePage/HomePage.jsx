import React, { useState } from 'react'
import styles from './styles/home-page.module.scss'
import ComponentPage from '../../component/ComponentPage/ComponentPages'
import Category from '../../component/Category/Category'
import SlidesProductCard from '../../component/SlidesProductCard/SlidesProductCard'
import Modal from './components/Modal/Modal'

const HomePage = () => {


  let [openModal, setOpenModal] = useState(true)

  return (
    <ComponentPage isHiddenHeader={true} isHiddenFooter={true}>

      <div className={styles.banner} />
      <div className={styles.mainSearch}>
        <div className={styles.search}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type={"text"} />
        </div>
      </div>

      <div className={`${styles.homePage} container`}>

        <Category />

        <div className={styles.slideComponent}>

          <div className={styles.groupTitle}>
            <h3 className={styles.Title}>Special Post for you</h3>
            <h3 className={styles.seeMore}>See more</h3>
          </div>

          <SlidesProductCard />
        </div>

        <div className={styles.slideComponent}>
          <div className={styles.groupTitle}>
            <h3 className={styles.Title}>Special Post for you</h3>
            <h3 className={styles.seeMore}>See more</h3>
          </div>

          <SlidesProductCard />
        </div>
        {
          openModal ? <Modal /> : <></>
        }

      </div>
    </ComponentPage>
  )
}

export default HomePage