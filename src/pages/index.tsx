import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

import styled from 'styled-components'
import tw from 'twin.macro'

export const config = { amp: false }

const Header = styled.header`
	${tw`text-black`};
`

const Home = () => {
	return (
		<>
			<NextSeo
				title='Byron Wades Web Development | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
					home
				</div>
			</Layout>
		</>
	)
}

export default Home
