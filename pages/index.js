import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Image from 'next/image'
import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  Stack,
  IconButton,
  Box,
  useToast
} from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'

export default function Home ({ products }) {
  const [search, setSearch] = useState('')
  // const [product, setProducts] = useState(products)
  const toast = useToast()
  return (
    <>
<Box mb={4} flexDirection="column" align="center" justify="center" py={8}>
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
                position: 'top-right',
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
              className='shadow appearance-none border rounded w-full text-gray-500 leading-tight focus:outline-none focus:shadow-outline'
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
        </Box>
    <div className="grid gap-4 grid-cols-2 container">
      {products.items.map(launch => {
        return (
          <>
          <div
          key={launch.id}
          className="flex justify-center items-center bg-gray-100 w-full">
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
                    width={400}
                    height={400}
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
                    image-w
                  "
                >
                  <div className="flex flex-col justify-start items-baseline">
                    <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                    { launch.name }
                    </h1>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <h1 className="font-bold text-gray-500">{ launch.price?.regularPrice?.amount.currency } { launch.price?.regularPrice?.amount.value }</h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
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
  products: PropTypes.object
}
