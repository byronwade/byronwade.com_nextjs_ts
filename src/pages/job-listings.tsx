import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

import styled from 'styled-components'
import tw from 'twin.macro'

export const config = { amp: false }

const Header = styled.header`
	${tw`text-black`};
`

const JobListings = () => {
	return (
		<>
			<NextSeo
				title='Byron Wades Web Development | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
					<div className='min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs'>
						<h4 className='mb-4 font-semibold'>Colored card</h4>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Fuga, cum commodi a omnis numquam quod? Totam
							exercitationem quos hic ipsam at qui cum numquam,
							sed amet ratione! Ratione, nihil dolorum.
						</p>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default JobListings
