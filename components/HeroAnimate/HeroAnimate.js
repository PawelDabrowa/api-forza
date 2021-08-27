
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { gsap, Power3, Power1 } from 'gsap/dist/gsap'

const HeroAnimate = ({ title }) => {
  const t1 = gsap.timeline({ delay: 0.3 })
  useEffect(() => {
    t1.from('.bannerMain', { x: 400, y: 200, scale: 2, duration: 1.5, opacity: 0 }, 'Start')
      .from('.paragapfAnimation', 1, { y: 30, ease: Power1.easeOut, delay: 0.5, opacity: 0, staggger: 1 }, 0.15, 'Start')
      .from('.text', 1, { y: 30, duration: 2, ease: Power3.easeOut, delay: 0.4, opacity: 0 }, 0.35, 'Start')
      .from('.subtext', 1, { y: 40, duration: 2, ease: Power3.easeOut, delay: 0.5, opacity: 0 }, 0.35, 'Start')
      .from('.btn-primary', 2, { y: 50, duration: 2, ease: Power3.easeOut, delay: 0.6, opacity: 0 }, 0.1
      )
  }, [])

  return (
    <>
    <section className="start-animation">
    <div className="container h-screen mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <div className="content-main flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
          <h1 className="subtext x-large uppercase my-4">{title}</h1>
          <p className="text my-4 tracking-loose">Witty Tagline</p>
          <p className="paragapfAnimation leading-normal mb-4">Enter your super app&amp;s description here... The key is to find the right length.</p>
          <button className="btn-primary bg-transparent hover:bg-black text-black hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent">Super Button</button>
      </div>
      <div className="w-full lg:w-1/2 lg:py-6 text-center">
          <svg className="bannerMain w-5/6 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
      </div>
    </div>
    </section>
    </>
  )
}

HeroAnimate.propTypes = {
  title: PropTypes.string.isRequired
}
export default HeroAnimate
