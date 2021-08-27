import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { animated, useSpring } from 'react-spring'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Nav.module.scss'

const links = [
  { href: '/about', label: 'About' },
  { href: '/page2', label: 'Page 2' },
  { href: '/', label: 'Page 3' },
  { href: '/', label: 'Page 4' }
]

function Nav () {
  const refMagicline = useRef()
  const refActiveMenuItem = useRef()
  const [isToggleOn, setisToggleOn] = useState(false)
  const [magiclineX, setMagiclineX] = useState(0)
  const [magiclineWidth, setMagiclineWidth] = useState(100)
  const router = useRouter()

  // Set animations
  const animationConfig = { mass: 1, tension: 317, friction: 17 }
  const hamburgerAnimation = useSpring({ height: isToggleOn ? '33px' : '14px', config: animationConfig })
  const topLineAnimation = useSpring({ transform: isToggleOn ? 'rotate(45deg) translateY(11px) translateX(10px)' : 'rotate(0deg) translateY(0px) translateX(0px)', config: animationConfig })
  const bottomLineAnimation = useSpring({ transform: isToggleOn ? 'rotate(-45deg) translateY(-11px) translateX(11px)' : 'rotate(0deg) translateY(0px) translateX(0px)', config: animationConfig })
  const menuAnimation = useSpring({ left: isToggleOn ? '0%' : '100%', config: { ...animationConfig, tension: 156 } })

  function onHover (e) {
    refMagicline.current.style.display = 'block'
    refMagicline.current.style.left = e.currentTarget.offsetLeft + 'px'
    refMagicline.current.style.width = (e.currentTarget.clientWidth) + 'px'
  }

  function onLeave () {
    refMagicline.current.style.left = magiclineX + 'px'

    if (refActiveMenuItem.current) {
      refMagicline.current.style.width = magiclineWidth + 'px'
    } else {
      refMagicline.current.style.width = '0px'
    }
  }

  function onClick () {
    if (isToggleOn) {
      setisToggleOn(false)
    }
  }

  useEffect(() => {
    if (refActiveMenuItem.current) {
      setMagiclineX(refActiveMenuItem.current.offsetLeft)
      setMagiclineWidth(refActiveMenuItem.current.clientWidth)
      refMagicline.current.style.left = magiclineX + 'px'
      refMagicline.current.style.width = magiclineWidth + 'px'
    } else {
      refMagicline.current.style.display = 'none'
    }

    function handleResize () {
      if (refActiveMenuItem.current) {
        setMagiclineX(refActiveMenuItem.current.offsetLeft)
        setMagiclineWidth(refActiveMenuItem.current.clientWidth)
      }
    }

    window.addEventListener('resize', handleResize)
  })

  return (
    <div className={`fixed bg-white z-50 ${styles.wrapper} ${isToggleOn && styles.active}`}>
      <nav id="nav" role="navigation" className="container flex justify-between items-center p-4 mx-auto">
        <Link href="/">
          <a>
            <Image
              src="/images/brand/fox-group-logo.svg"
              alt="70 Hyal"
              width={96}
              height={14}
            />
          </a>
        </Link>

        <animated.ul
          id="menu"
          style={menuAnimation}
          className={`${styles.menu} flex fixed lg:static bg-white top-0 w-full lg:w-4/6 h-full lg:h-auto z-10 flex-col lg:flex-row justify-center lg:justify-between text-center`}
          tabIndex="-1"
          aria-label="main navigation"
          hidden={!isToggleOn}>

          {links.map(({ href, label }) => (
            <li
              key={`${href}${label}`}
              className={`p-2 text-lg lg:text-sm z-10 relative lg:flex-grow lg:text-left ${router.pathname === href ? 'active' : ''}`}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              onClick={onClick}
              ref={router.pathname === href ? refActiveMenuItem : null}
            >
              <Link href={href}>
                <a className="text-black no-underline">{label}</a>
              </Link>
            </li>
          ))}
          <li className={styles.magicline} ref={refMagicline} ></li>
        </animated.ul>
        <animated.button style={hamburgerAnimation} className={`lg:hidden ${styles.hamburger}`} aria-expanded="false" aria-controls="menu" onClick={() => setisToggleOn(!isToggleOn)}>
          <animated.span style={topLineAnimation} />
          <span />
          <animated.span style={bottomLineAnimation} />
        </animated.button>
      </nav>
    </div>
  )
}

export default Nav
