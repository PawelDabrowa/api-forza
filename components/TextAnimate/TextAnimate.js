
import { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const About = ( { title, decription, title2 } ) => {
  useEffect(() => {
    gsap.from('.content-1', { duration: 4, y: '150', opacity: 0, ease: 'ease-in', scrollTrigger: { trigger: '.content-main-1', start: 'top 90%', end: 'bottom 60%', markers: true, toggleActions: 'restart complete reverse reset' } })
  }, [])

  return (
    <>
    <section className="content-1 bg-purple-100 mb-10 leading-10 ">
      <div className="container my-0 mx-auto">
      <div className="content-main-1 py-4 px-8">
      <p className="font-bold text-sm uppercase">Lorem ipsum</p>
      <p className="text-md py-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Don't want it to be too long, but then don't want it to be too short so that it looks weird between the title and button below. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <p className="text-2xl mb-10 leading-none">Lorem ipsum</p>
      </div>
      </div>
    </section>
    </>
  )
}
export default About
