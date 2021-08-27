import Image from 'next/image'
// import { animated, useSpring } from 'react-spring'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Subcontent.module.scss'

function Subcontent (subcontent) {
  const router = useRouter()

  if (!subcontent.content) {
    return false
  }

  const content = subcontent.content

  return (
    <div className={`${styles.subcontent} hidden md:fixed bg-white w-full py-4 text-black`}>
      <div className="container mx-auto flex">
        <div className="w-1/2 pr-40 text-left">
          <div className={styles.description}>
            { content.description }
          </div>
        </div>
        <ul className="w-1/2 flex">
          {content.links.map(({ image, label, href }) => (
            <li key={href + label} className={`text-left flex-grow pb-1 ${router.pathname === href ? 'active' : ''}`}>
              <Link href={href}>
                <a className="block">
                  <Image
                    src={image}
                    alt={label}
                    width={166}
                    height={123}
                    className="pb-2"
                  />
                <span style={{ display: 'block' }}>{label}</span></a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Subcontent
