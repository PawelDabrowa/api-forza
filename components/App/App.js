import { useQuery } from '@apollo/client'
import React from 'react'
import styles from './App.module.css'
import APP_QUERY from './App.graphql'
import Link from 'next/link'
import NextNprogress from 'nextjs-progressbar'
import Head from 'next/head'
import { resolveImage } from '~/lib/resolve-image'

export const App = ({ children }) => {
  const { data } = useQuery(APP_QUERY)

  const store = data?.storeConfig

  const categoryUrlSuffix = store?.category_url_suffix ?? ''

  const categories = data?.categoryList[0].children

  return (
    <React.Fragment>
      <Head>
        <title>{store?.default_title}</title>
      </Head>

      <div className={styles.app}>
        <NextNprogress
          startPosition={0.4}
          stopDelayMs={200}
          height={6}
          options={{ showSpinner: false, easing: 'ease' }}
        />

        <div className={styles.content}>{children}</div>
      </div>
    </React.Fragment>
  )
}
