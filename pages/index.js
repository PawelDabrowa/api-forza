import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Image from 'next/image'
import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  Stack,
  IconButton,
  useToast
} from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'

// function ButtonIncrement (props) {
//   return (
//     <button style={{ marginLeft: '0.5rem' }} onClick={props.onClickFunc}>
//     <span>prev</span>
//     </button>
//   )
// }
// function ButtonDecrement (props) {
//   return (
//    <button style={{ marginLeft: '0.5rem' }} onClick={props.onClickFunc}>
//    <span>next</span>
//    </button>
//   )
// }
// function Display (props) {
//   return (
//    <label style={{ marginLeft: '0.5rem' }} >{props.message}</label>
//   )
// }

export default function Home ({ products }) {
  const [search, setSearch] = useState('')
  // const [product, setProducts] = useState(products)
  const toast = useToast()

  // const [counter, setCounter] = useState(1)
  // const incrementCounter = () => setCounter(counter - 1)
  // let decrementCounter = () => setCounter(counter + 1)
  // if (counter <= 0) {
  //   decrementCounter = () => setCounter(1)
  // }

  return (
    <>

    <form
          onSubmit={async (event) => {
            event.preventDefault()
            const results = await fetch('/api/SearchProducts', {
              method: 'post',
              body: search
            })
            const { error } = await results.json()
            if (error) {
              toast({
                position: 'bottom',
                title: 'An error occurred.',
                description: error,
                status: 'error',
                duration: 5000,
                isClosable: true
              })
            }
          }}
        >
          <Stack maxWidth="350px" width="100%" isInline mb={8}>
            <Input
              placeholder="Search"
              value={search}
              border="none"
              onChange={(e) => setSearch(e.target.value)}
            ></Input>
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              disabled={search === ''}
              type="submit"
            />
            <IconButton
              colorScheme="red"
              aria-label="Reset "
              icon={<CloseIcon />}
              disabled={search === ''}
              onClick={async () => {
                setSearch('')
                // setProducts(products)
              }}
            />
          </Stack>
        </form>
    <div className="grid gap-4 grid-cols-2 container">
      {products.items.map(launch => {
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
    {/* <ButtonIncrement onClickFunc={incrementCounter}/>
      <Display message={counter}/>
    <ButtonDecrement onClickFunc={decrementCounter}/> */}
    </>
  )
}
export async function getStaticProps (props) {
  const client = new ApolloClient({
    uri: 'https://www.greenbowsports.co.uk/graphql/',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
    query {
      products(
          search: "forza-mini-target-goal-only"
          currentPage: 2
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
      products: data.products
    }
  }
}

Home.propTypes = {
  products: PropTypes.object,
  onClickFunc: PropTypes.func,
  message: PropTypes.string
}
