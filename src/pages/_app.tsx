import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import Head from 'next/head'

import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

import '../styles/globals.css'
//import '../styles/stripe.css' //only temp

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')

const queryCache = new QueryCache()

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<Elements stripe={stripePromise}>
				<Head>
					<link rel='icon' href='/favicon.ico' />
					<meta name='theme-color' content={``} />
				</Head>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen />
			</Elements>
		</ReactQueryCacheProvider>
	)
}

export default MyApp
