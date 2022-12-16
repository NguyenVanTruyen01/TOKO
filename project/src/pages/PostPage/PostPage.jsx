import React from 'react'
import styles from './styles/post-page.module.scss'
import ComponentPage from '../../component/ComponentPage/ComponentPages'
import SlidesProductCard from '../../component/SlidesProductCard/SlidesProductCard'
import { useEffect } from 'react'
import GridItem from '../SearchPage/components/GridItem/GridItem'

const PostPage = (props) => {

  useEffect(() => {
    const imgs = document.querySelectorAll('.imgSelectScript a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
      });
    });

    function slideImage() {
      const displayWidth = document.querySelector('.imgShowcaseScript img:first-child').clientWidth;

      document.querySelector('.imgShowcaseScript').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);

  }, [])

  return (
    <ComponentPage isHiddenHeader={true} isHiddenFooter={true}>
      <div className={` ${styles.postPage} container`}>

        <div className={styles.productDetail}>

          <div className={styles.productImgs}>

            <div className={styles.imgDisplay}>
              <div className={`${styles.imgShowcase} imgShowcaseScript`}>
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="shoe image" />
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="shoe image" />
                <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="shoe image" />
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="shoe image" />
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="shoe image" />
              </div>
            </div>

            <div className={`${styles.imgSelect} imgSelectScript `}>
              <div className={styles.imgItem}>
                <a href="#" data-id="1">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="shoe image" />

                </a>
              </div>
              <div className={styles.imgItem}>
                <a href="#" data-id="2">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="shoe image" />

                </a>
              </div>
              <div className={styles.imgItem}>
                <a href="#" data-id="3">
                  <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="shoe image" />

                </a>
              </div>
              <div className={styles.imgItem}>
                <a href="#" data-id="4">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="shoe image" />

                </a>
              </div>

              <div className={styles.imgItem}>
                <a href="#" data-id="5">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="shoe image" />

                </a>
              </div>
            </div>
          </div>

          <div className={styles.productInfo}>

            <div className={styles.infoHeader}>

              <span className={styles.productName}>BMW 3 Series 320i model 2009</span>

              <div className={styles.address}>
                <i class="fas fa-map-marker-alt"></i>
                <span>Nguyen Huu Tho, Tan Phong Ward, District 7</span>
              </div>

              <div className={styles.groupBuy}>
                <span>385.000.000 VND</span>
                <div className={styles.groupBtn}>
                  <button className={styles.btnReport}>
                    <i class="fas fa-exclamation-triangle"
                      style={{ color: "#FCC72E" }}></i>
                    Report
                  </button>
                  <button className={styles.btnShare}>
                    <i class="fas fa-heart"
                      style={{ color: "#FA808A" }}></i>
                    Share post
                  </button>
                </div>

              </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.infoContent}>
              <span>
                Description
              </span>
              <span>
                Bold European car feeling of driving with your back to the seat.
                I want to share a little bit of my feeling when I have used it, manufactured in 2009 equipped with full option 6 airbags, ABS anti-lock brakes, anti-slip electronic balance system, auto lights. , sport driving mode. Talk about a lot of technology.
                She has been upgraded to a lot of DVD screens, reverse cameras, dash cams and a set of brand new tires.
              </span>
              <span>See more</span>
            </div>

            <div className={styles.line}></div>

            <div className={styles.infoFooter}>

              <div className={styles.cardInfo}>

                <div className={styles.cardStart}>
                  <div className={styles.cardStartHeader}>
                    <div className={styles.infoSeller}>
                      <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png" alt="" />
                      <div>
                        <span className={styles.nameSeller}>Khang Huynh</span>
                        <div className={styles.groupStar}>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <span className={styles.rating}>4.0</span>
                        </div>
                      </div>
                    </div>
                    <span>View Page</span>
                  </div>

                  <div className={styles.cardEnd}>
                    <ul>
                      <li>
                        <span >50</span>
                        <span >Posted News</span>
                      </li>
                      <li>
                        <span >90%</span>
                        <span >Chat Reponse Rate</span>
                      </li>
                      <li>
                        <span >60</span>
                        <span >Reviewed</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

              <div className={styles.groupBtn}>
                <button>
                  CHAT WITH SELLER
                </button>
                <button>
                  BOOK AN APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.slideComponent}>
          <div className={styles.groupTitle}>
            <h3 className={styles.Title}>Special Post for you</h3>
            <h3 className={styles.seeMore}>See more</h3>
          </div>

          <SlidesProductCard />
        </div>

        <div className={styles.slideComponent}>
          <div className={styles.groupTitle}>
            <h3 className={styles.Title}>Similar Posts</h3>
          </div>

          <GridItem />
        </div>

      </div>
    </ComponentPage >
  )
}

export default PostPage