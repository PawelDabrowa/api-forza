import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://www.greenbowsports.co.uk/graphql/',
  cache: new InMemoryCache()
})

export default async (req, res) => {
  // const search = req.body

  try {
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
    res.status(200).json({ characters: data.characters.results, error: null })
  } catch (error) {
    if (error.message === '404: Not Found') {
      res.status(404).json({ characters: null, error: 'No Characters found' })
    } else {
      res
        .status(500)
        .json({ characters: null, error: 'Internal Error, Please try again' })
    }
  }
}
