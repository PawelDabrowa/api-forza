import styles from './Button.module.css'
import Link from 'next/link'
import PropTypes from 'prop-types'

function Button ({ label, href, target, className, rel }) {
  const { arrow } = styles
  let relComponent
  if (typeof myComponent !== 'string') {
    relComponent = rel = { rel }
  } else {
    relComponent = null
  }

  return (
    <Link href={href} passHref>
      <a
        className={`uppercase hover:underline py-2 px-4 ${arrow} ${className ?? ''}`}
        target={ target ?? '_self' }
        { ...relComponent }
      >
        {label}
      </a>
    </Link >
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
  rel: PropTypes.string
}

export default Button
