import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

import styled from 'styled-components'
import tw from 'twin.macro'

export const config = { amp: false }

const Header = styled.header`
	${tw`text-black`};
`
// dribbble
// {
// 	"access_token": "cd74ebb29665ce746b6607c040ace835dc7f8898aba4d7f1f6e96ff1b0b51dc2",
// 	"token_type": "Bearer",
// 	"scope": "public",
// 	"created_at": 1607482267
// }

// github
// {
// 	"access_token": "143d79bbe2d651d9b39bb3bd77653ca7090e8628 "
// }

const Work = ({ dribble, github }) => {
	console.log(dribble, github)
	return (
		<>
			<NextSeo
				title='Byron Wades Web Development | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
					Work
				</div>
			</Layout>
		</>
	)
}

export default Work

export async function getStaticProps(context) {
	const dribble = await fetch(
		'https://api.dribbble.com/v2/user/shots?access_token=cd74ebb29665ce746b6607c040ace835dc7f8898aba4d7f1f6e96ff1b0b51dc2'
	)
		.then((response) => response.json())
		.then((data) => {
			return data
		})

	const github = await fetch('https://api.github.com/users/byronwade/repos')
		.then((response) => response.json())
		.then((data) => {
			return data
		})

	return {
		props: { dribble, github }, // will be passed to the page component as props
	}
}
