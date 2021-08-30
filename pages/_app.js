import PropTypes from 'prop-types'
import '../styles/index.css'
import { ChakraProvider } from '@chakra-ui/react'

function App ({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default App
