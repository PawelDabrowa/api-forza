
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Nav, TextAnimate, HeroAnimate } from '../components'
import Image from 'next/image'
import PropTypes from 'prop-types'

export default function Home ({ launches }) {
  console.log('launches', launches)
  return (
    <>
    <Nav/>
    <div className="grid gap-4 grid-cols-2 container">
      {launches.items.map(launch => {
        return (
          <>
          <div className="flex justify-center items-center bg-gray-100 w-full">
              <div
                className="
                  bg-white
                  shadow-md
                  h-96
                  mx-3
                  rounded-3xl
                  flex flex-col
                  justify-around
                  items-center
                  overflow-hidden
                  sm:flex-row sm:h-52 sm:w-3/5
                  md:w-96
                "
              >
                <Image
                    src={ launch.image.url }
                    width={500}
                    height={500}
                    priority
                    alt=""
                  />
                <div
                  className="
                    flex-1
                    w-full
                    flex flex-col
                    items-baseline
                    justify-around
                    h-1/2
                    pl-6
                    sm:h-full sm:items-baseline sm:w-1/2
                  "
                >
                  <div className="flex flex-col justify-start items-baseline">
                    <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                    { launch.name }
                    </h1>
                    <span className="text-xs text-indigo-300 mt-0">by supplier</span>
                  </div>
                  <p className="text-xs text-gray-500 w-4/5">
                    Ergonimical for human body curv
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <h1 className="font-bold text-gray-500">{ launch.id }</h1>
                    <button
                      className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
    <button>More</button>
    </>
  )
}
export async function getStaticProps () {
  const client = new ApolloClient({
    uri: 'https://www.greenbowsports.co.uk/graphql/',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
    query {
      products(
          search: "forza-mini-target-goal-only"
          currentPage: 1
          pageSize: 4
        )
      {
        items {
            name
            short_description {html}
            id
            sku
            image {url}
            price {
                regularPrice {
                    amount {
                        value
                        currency
                    }
                }
            }
        }
      }
  
    }
    `
  })

  return {
    props: {
      launches: data.products
    }
  }
}

Home.propTypes = {
  launches: PropTypes.func
}
