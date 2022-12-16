import React from 'react'
import styles from './styles/search-page.module.scss'
import ComponentPage from '../../component/ComponentPage/ComponentPages'
import Filter from './components/Filter/Filter'
import Rating from './components/Rating/Rating'
import PriceRange from './components/PriceRange/PriceRange'
import Category from './components/Category/Category'
import TitleSearch from './components/TitleSearch/TitleSearch'
import ListValueSearch from './components/ListValueSearch/ListValueSearch'
import GridItem from './components/GridItem/GridItem'
const SearchPage = () => {
  return (
    <ComponentPage isHiddenHeader={true} isHiddenFooter={true}>
      <div className={styles.search}>
        <div className={styles.banner} />
        <div className={styles.mainSearch}>
          <div className={styles.search}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type={"text"} />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.bar}>
            <Filter />
            <Category />
            <PriceRange />
            <Rating />
          </div>
          <div className={styles.contain}>
            <TitleSearch />
            <ListValueSearch />
            <GridItem />
          </div>

        </div>





      </div>

    </ComponentPage>
  )
}

export default SearchPage