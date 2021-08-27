
import { useEffect } from 'react'
import { gsap, Power3, Power1 } from 'gsap/dist/gsap'

import styles from './HeroAnimate2.module.scss'

const HeroAnimate2 = () => {
  useEffect(() => {

  }, [])

  return (
    <>
    <section className={styles.outerWrapper}>
      <main className={styles.innerWrapper}>
          <div className={styles.textWrapper}>
              <h1 className={`${styles.anim} ${styles.anim1}`}>
              <span>Bridging the gap</span>
              <span>between dream</span>
              <span>and reality</span>
              </h1>
              <p className={`${styles.anim} ${styles.anim4}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio at ipsa alias modi natus excepturi?</p>
              <a href="#" className={`${styles.anim} ${styles.anim5}`} id="cta">Start Dreaming</a>
          </div>
          <aside className={styles.asWrapper}>
              <div className={styles.inWrapper}>
                  <img className={styles.swirl} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/swirl.png" alt="Swirl Graphic" />
              </div>
          </aside>
      </main>
    </section>
    </>
  )
}
export default HeroAnimate2
