import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = (props) => {
  return (
   <footer className={styles.footer}>
    <section className='p-4 white mx-auto justify-between flex flex-row container'>
      <div className='flex items-center '>
        <span className='sm:text-sm text-xs text-fox-beige-dark'>Copyright © {new Date().getFullYear()}</span>
      </div>
      <div className='flex flex-col sm:flex-row'>
        <div>
          <Link href='/terms'>
          <a
          className='hover:underline sm:text-sm text-xs text-fox-beige-dark py-2 px-4'
          >
            Terms &amp; Privacy
          </a>
          </Link >
        </div>
        <div>
          <Link href='/warranties'>
          <a
          className='hover:underline sm:text-sm text-xs text-fox-beige-dark py-2 px-4'
          >
            Warranties
          </a>
          </Link >
        </div>
       </div>
    </section>
   </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.string,
  paragraph: PropTypes.string
}

export default Footer
