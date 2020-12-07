import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

import styled from 'styled-components'
import tw from 'twin.macro'

export const config = { amp: false }

const Header = styled.header`
	${tw`text-black`};
`

const Blog = () => {
	return (
		<>
			<NextSeo
				title='Byron Wades Web Development | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div>blog</div>
			</Layout>
		</>
	)
}

export default Blog
