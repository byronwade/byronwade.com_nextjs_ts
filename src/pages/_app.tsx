import React from 'react'
import type { AppProps } from 'next/app'

//SEO and Head stuff for next JS
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

//to be able to run page querys
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

//global styles
import '../styles/globals.css'

const queryCache = new QueryCache()

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta name='theme-color' content={``} />
			</Head>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
			<ReactQueryDevtools initialIsOpen />
		</ReactQueryCacheProvider>
	)
}

export default MyApp
