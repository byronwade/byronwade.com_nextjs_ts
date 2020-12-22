import { NextSeo } from 'next-seo'

import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllFilesFrontMatter } from '../../lib/mdx'

import styled from 'styled-components'
import tw from 'twin.macro'

export const config = { amp: false }

const Header = styled.header`
	${tw`text-black`};
`

const CaseStudies = ({ caseStudies }) => {
	console.log(caseStudies)
	return (
		<>
			<NextSeo
				title='Byron Wades Web Development | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
					{caseStudies.map((caseStudy, index) => (
						<div key={index}>
							{caseStudy.featuredImage && (
								<img
									src={`http://www.localhost:3000/images/${post.slug}/${post.featuredImage}`}
								/>
							)}
							<h1>{caseStudy.title}</h1>
							<p>{caseStudy.date}</p>
							<p>{caseStudy.description}</p>
							<Link href={`/case-studies/${caseStudy.slug}`}>
								<span className='cursor-pointer font-medium text-gray-700 underline'>
									Learn More
								</span>
							</Link>
						</div>
					))}
				</div>
			</Layout>
		</>
	)
}

export default CaseStudies

export async function getStaticProps() {
	const caseStudies = await getAllFilesFrontMatter('case-studies')

	return { props: { caseStudies } }
}
